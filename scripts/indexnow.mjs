#!/usr/bin/env node

const KEY = '08d29e3489f0d400647c3bcf655a58dd';
const HOST = 'ctey.dev';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function skipReason() {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== 'production') {
    return `VERCEL_ENV=${vercelEnv}`;
  }

  const eventName = process.env.GITHUB_EVENT_NAME;
  if (eventName && eventName !== 'push') {
    return `GITHUB_EVENT_NAME=${eventName}`;
  }

  const ref = process.env.GITHUB_REF;
  if (ref && ref !== 'refs/heads/main') {
    return `GITHUB_REF=${ref}`;
  }

  return null;
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map(
    (match) => match[1],
  );
}

async function main() {
  const reason = skipReason();
  if (reason) {
    console.log(`Skipping IndexNow ping (${reason}). Production-only.`);
    process.exit(0);
  }

  const sitemapRes = await fetch(SITEMAP_URL);
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch ${SITEMAP_URL}: ${sitemapRes.status}`);
  }

  const urlList = [...new Set(extractLocs(await sitemapRes.text()))];
  if (urlList.length === 0) {
    throw new Error(`No <loc> URLs found in ${SITEMAP_URL}`);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = await response.text();

  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow ${response.status}: ${body}`);
  }

  console.log(
    `IndexNow accepted ${urlList.length} URLs from ${SITEMAP_URL} (${response.status})`,
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

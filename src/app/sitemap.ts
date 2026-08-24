import { source } from '@/lib/source';
import { isSeoExcludedDocsUrl } from '@/lib/seo';
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
	const currentDate = new Date();

	const rootEntry: MetadataRoute.Sitemap[number] = {
		url: SITE_URL,
		lastModified: currentDate,
		changeFrequency: 'monthly',
		priority: 1.0,
	};

	let docsEntries: MetadataRoute.Sitemap = [];

	try {
		docsEntries = source
			.getPages()
			.filter((page) => !isSeoExcludedDocsUrl(page.url))
			.map<MetadataRoute.Sitemap[number]>((page) => ({
				url: `${SITE_URL}${page.url}`,
				lastModified: currentDate,
				changeFrequency: 'monthly',
				priority: page.url === '/docs' ? 0.9 : 0.7,
			}));
	} catch {
		docsEntries = [];
	}

	return [rootEntry, ...docsEntries];
}

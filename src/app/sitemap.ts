import { source } from '@/lib/source';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ctey.dev'; // Replace with your actual domain
	const currentDate = new Date();

	const rootEntry: MetadataRoute.Sitemap[number] = {
		url: `${baseUrl}`,
		lastModified: currentDate,
		changeFrequency: 'monthly',
		priority: 1.0,
	};

	const docsEntries = source.getPages().map<MetadataRoute.Sitemap[number]>(
		(page) => ({
			url: `${baseUrl}${page.url}`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: page.url === '/docs' ? 0.9 : 0.7,
		}),
	);

	return [rootEntry, ...docsEntries];
}

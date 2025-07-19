import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ctey.dev'; // Replace with your actual domain

	// Define the current date for lastModified
	const currentDate = new Date();

	// Define static pages
	const staticPages = [
		{
			url: `${baseUrl}`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/docs`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/docs/contacts`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/docs/projects`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
	];

	// Define project pages
	const projectPages = [
		// ML Projects
		{
			url: `${baseUrl}/docs/projects/anime-face-gan`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/wild-life-prediction`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},

		// Mobile App Projects
		{
			url: `${baseUrl}/docs/projects/snappost`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},

		// Web App Projects
		{
			url: `${baseUrl}/docs/projects/attendance-system`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/bacii-countdown`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/job-finding`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/note-taking`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/portfolio`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/docs/projects/password_game`,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
	];

	return [...staticPages, ...projectPages];
}
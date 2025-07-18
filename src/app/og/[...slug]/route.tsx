import { generateOGImage } from '@/app/og/og';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';

export async function GET(
	_req: Request,
	{ params }: { params: Promise<{ slug: string[] }> },
) {
	const { slug } = await params;
	const page = source.getPage(slug.slice(0, -1));
	if (!page) notFound();
	return generateOGImage({
		primaryTextColor: 'rgb(240,240,240)',
		title: "Chintey - Software Developer",
		description: 'Software Developer specializing in TypeScript, React, and React Native. Passionate about Anime and Open Source.',
	});
}

export function generateStaticParams(): {
	slug: string[];
}[] {
	return source.generateParams().map((page) => ({
		...page,
		slug: [...page.slug, 'image.png'],
	}));
}
import { generateOGImage } from '@/app/og/[...slug]/og';
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
		title: "CTEY",
		description: "A documentation site showcasing projects, skills, and expertise.",
	});
}
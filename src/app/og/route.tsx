import { generateOGImage } from '@/app/og/[...slug]/og';

export async function GET() {
	return generateOGImage({
		primaryTextColor: 'rgb(240,240,240)',
		title: 'Chintey - Software Developer',
		description: 'Software Developer specializing in TypeScript, React, and React Native. Passionate about Anime and Open Source.',
	});
}
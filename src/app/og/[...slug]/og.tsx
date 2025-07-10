import { ImageResponse } from 'next/og';
import type { ReactElement, ReactNode } from 'react';
import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types';

interface GenerateProps {
    title: ReactNode;
    description?: ReactNode;
    primaryTextColor?: string;
}

export function generateOGImage(
    options: GenerateProps & ImageResponseOptions,
): ImageResponse {
    const { title, description, primaryTextColor, ...rest } = options;

    return new ImageResponse(
        generate({
            title,
            description,
            primaryTextColor,
        }),
        {
            width: 1200,
            height: 630,
            ...rest,
        },
    );
}

export function generate({
                             primaryTextColor = 'rgb(255,150,255)',
                             ...props
                         }: GenerateProps): ReactElement {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                color: 'white',
                backgroundColor: 'rgb(10,10,10)',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '4rem',
                }}
            >
                <p
                    style={{
                        fontWeight: 600,
                        fontSize: '76px',
                    }}
                >
                    {props.title}
                </p>
                <p
                    style={{
                        fontSize: '48px',
                        color: 'rgba(240,240,240,0.7)',
                    }}
                >
                    {props.description}
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '24px',
                        marginTop: 'auto',
                        color: primaryTextColor,
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                        <path d="M10 16h4"></path>
                        <path d="m2 16 4-4-4-4"></path>
                        <path d="m18 16 4-4-4-4"></path>
                    </svg>
                    <p
                        style={{
                            fontSize: '46px',
                            fontWeight: 600,
                        }}
                    >
                        CTEY
                    </p>
                </div>
            </div>
        </div>
    );
}
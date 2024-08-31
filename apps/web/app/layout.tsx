import "@repo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@repo/ui/lib/utils";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
	title: "Cyberbard - The Ultimate AI-Powered Testing Tool You’ve Been Waiting For!",
	description:
		"Elevate your functional testing with Cyberbard, the cutting-edge AI software that eliminates the need for script writing and test cases. Experience seamless automation as it intelligently mimics real user behavior, delivering unparalleled efficiency and accuracy in your testing process.",
	openGraph: {
		images: [
			{
				url: "https://cyberbard.co.uk/og-image.png",
				width: 1608,
				height: 500,
				alt: "Cyberbard - The Ultimate AI-Powered Testing Tool You’ve Been Waiting For!",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "https://cyberbard.co.uk",
		creator: "https://cyberbard.co.uk",
		title: "Cyberbard - The Ultimate AI-Powered Testing Tool You’ve Been Waiting For!",
		description:
			"Elevate your functional testing with Cyberbard, the cutting-edge AI software that eliminates the need for script writing and test cases.",
		images: [
			{
				url: "https://cyberbard.co.uk/og-image.png",
				width: 1608,
				height: 500,
				alt: "Cyberbard - The Ultimate AI-Powered Testing Tool You’ve Been Waiting For!",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
			<head>
				{/* Cloudflare web analytics */}
				{/* <script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "16d76ebb82c74d9983b71d09ab6617bc"}'
				></script> */}
			</head>
			{/* TODO: when lightmode support is added, remove the 'dark' class from the body tag */}
			<body
				className={cn(
					`${inter.className} dark`,
					GeistMono.variable,
					GeistSans.variable,
				)}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}

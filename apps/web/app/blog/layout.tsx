import Footer from "../_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "../_components/theme-switcher";

import "./globals.css";
export const runtime = "edge";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
    description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
    openGraph: {
        images: [HOME_OG_IMAGE_URL],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#000000"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
            <body
                className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
            >
                <ThemeSwitcher />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
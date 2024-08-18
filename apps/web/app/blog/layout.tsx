import Footer from "../_components/footer";
import { CMS_NAME } from "../lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "../_components/theme-switcher";

import "../globals.css";
export const runtime = "edge";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: `Blog with ${CMS_NAME}`,
    description: `${CMS_NAME} shares with you some knowledge and latest developments in the software testing industry.`,
    // openGraph: {
    //     images: [HOME_OG_IMAGE_URL],
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
            >
                {/* <ThemeSwitcher /> */}
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
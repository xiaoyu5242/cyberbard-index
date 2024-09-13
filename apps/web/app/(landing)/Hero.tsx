"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "@repo/ui/components/icons";
import EmailInput from "./EmailInput";
import LinkArrow from "./linkArrow";
import { TwitterBorder } from "./twitterLink";
import AnimatedLogoCloud from "./ImageSliders";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const slap = {
	initial: {
		opacity: 0,
		scale: 1.1,
	},
	whileInView: { opacity: 1, scale: 1 },
	transition: {
		duration: 0.5,
		ease: "easeInOut",
	},
	viewport: { once: true },
};

const Hero = ({
	userName,
}: {
	userName: string | null | undefined;
}) => {
	return (
		<>
			<section className="flex relative flex-col gap-5 justify-center items-center mt-24 max-w-xl md:mt-32 md:max-w-3xl lg:max-w-4xl">
				<TwitterBorder />
				<motion.h1
					{...{
						...slap,
						transition: { ...slap.transition, delay: 0.2 },
					}}
					className="text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-7xl"
				>
					Describe it simply<br/>{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-zinc-300">
						Cyberbard
					</span>{" "}
					tests it fully
				</motion.h1>
				<motion.p
					{...{
						...slap,
						transition: { ...slap.transition, delay: 0.3 },
					}}
					className="text-lg text-center text-soft-foreground-text"
				>
					Boost testing efficiency with AI: automatically generate test cases from natural language and seamlessly perform UI and accessibility tests.
				</motion.p>
				{userName ? (<p className="text-lg bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent self-center text-center">Welcome back, {userName}!<br />You are already on the waitlist.</p>
				) : (
					<Link
						href="/signin"
						className="inline-flex text-lg gap-x-2 mt-2 backdrop-blur-md text-white justify-center items-center py-3 px-5 w-fit rounded-3xl border duration-200 group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
					>
						Join The Waitlist
						<div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
							<ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
							<ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
						</div>
					</Link>
				)}
				{/* <a
					href="https://www.producthunt.com/posts/supermemory?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-supermemory"
					target="_blank"
				> */}
				{/* <img
						src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=472686&theme=dark&period=daily"
						alt="Supermemory - AI&#0032;second&#0032;brain&#0032;for&#0032;all&#0032;your&#0032;saved&#0032;stuff | Product Hunt"
						style={{ width: "250px", height: "54px" }}
						width="250"
						height="54"
					/> */}
				{/* </a> */}
			</section>

			<AnimatedLogoCloud />
			<div className="relative z-50 w-full h-0 pb-[56.25%]">
				{/* <motion.img
					{...{
						...slap,
						transition: { ...slap.transition, delay: 0.35 },
					}}
					src="/images/landing-hero.jpeg"
					alt="Landing page background"
					width={1512}
					height={1405}
					draggable="false"
					className="z-40 md:mt-[-40px] hidden sm:block h-full max-w-[70vw] mx-auto md:w-full select-none px-5 !rounded-2xl"
					style={{
						borderRadius: "20px",
					}}
				/> */}
				<div
					className="absolute -z-10 left-0 top-[10%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-100  blur-[337.4px]"
					style={{ transform: "rotate(-30deg)" }}
				/>
				<iframe className="mt-10 absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dBA-uzq7SBA?si=B-me3padO35YZXsy" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
			</div>
		</>
	);
}

export default Hero;

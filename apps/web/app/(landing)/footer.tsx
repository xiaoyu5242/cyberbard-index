import React from "react";
import LinkArrow from "./linkArrow";
import Link from "next/link";

function Footer() {
	return (
		<footer className="mt-20 w-full md:flex overflow-y-hidden items-center justify-between gap-4 px-8 py-8 text-sm text-zinc-500 overflow-hidden text-center">
			<p>© 2024 Cyberbard LTD</p>
			<div className="flex gap-5 justify-around my-2">
				<a
					className="group/mail flex items-center"
					target="_blank"
					href="mailto:support@cyberbard.co.uk"
				>
					Contact
					<LinkArrow classname="group-hover/mail:opacity-100 opacity-0 transition hidden md:block" />
				</a>
				<Link
					className="group/twit flex items-center"
					target="_blank"
					href="/tos"
				>
					Service{" "}
					<LinkArrow classname="group-hover/twit:opacity-100 opacity-0 transition hidden md:block" />
				</Link>
				<Link
					className="group/git flex items-center"
					target="_blank"
					href="/privacy"
				>
					Privacy{" "}
					<LinkArrow classname="group-hover/git:opacity-100 opacity-0 transition hidden md:block" />
				</Link>
			</div>
		</footer>
	);
}

export default Footer;

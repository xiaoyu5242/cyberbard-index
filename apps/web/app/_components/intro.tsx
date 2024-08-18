import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link className="bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent flex pt-10 pb-10"
          href="/">
          <Image src={Logo} alt="Cyberbard logo" width={45} height={40} />
          <p>Cyberbard</p>
        </Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">

        <Link
          href="/blog"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          Blog
        </Link>
        {/* <Link
              href="/signin"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Join The Waitlist
            </Link> */}
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors text-indigo-300"
        >
          Join the waitlist
        </a>{" "} */}
        {/* for exclusive updates. */}
      </h4>
    </section>
  );
}

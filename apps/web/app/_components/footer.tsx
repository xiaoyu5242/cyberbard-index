import Link from "next/link";
import Container from "./container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-auto items-center">
          {/* <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Cyberbard partners with you to revolutionize the software testing industry.
          </h3> */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link
              href={`/blog`}
              className="text-xl mx-3 font-bold hover:underline"
            >
              Blog
            </Link>
            <Link
              href={`/`}
              className="text-xl mx-3 font-bold hover:underline"
            >
              Home
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

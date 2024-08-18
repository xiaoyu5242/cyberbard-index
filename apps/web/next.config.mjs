import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// Optionally, add any other Next.js config below
	transpilePackages: ["@repo/ui"],
	eslint: {
		ignoreDuringBuilds: true,
	},
};

// export default nextConfig;

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === "development") {
	// `await`ing the call is not necessary but it helps making sure that the setup has succeeded.
	//  If you cannot use top level awaits you could use the following to avoid an unhandled rejection:
	//  `setupDevPlatform().catch(e => console.error(e));`
	await setupDevPlatform();
}

import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
// const nextConfig = {
// }
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

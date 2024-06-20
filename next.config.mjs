import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx"],
  };

const withMDX = nextMDX({
    extension: /\.mdx?$/,
});
  
export default withMDX(nextConfig);

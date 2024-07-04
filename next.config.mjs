import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    // rehypePlugins: [rehypeStringify],
  },
})

// Define the pageExtensions option to have Next handle .mdx files in the pages directory as pages:
export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})

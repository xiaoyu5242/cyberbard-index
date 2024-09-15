import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    li: (props) => <li style={{ listStyle: 'circle', marginLeft: "40px" }} {...props} />,
    strong: (props) => <strong style={{ color: '#715cff' }} {...props} />,
    a: (props) => <a style={{ color: '#715cff' }} {...props} />,
    h2: (props) => <h2 style={{ color: '#715cff' }} {...props} />,
    // Add any other custom styles as needed
    ...components,
  };
}
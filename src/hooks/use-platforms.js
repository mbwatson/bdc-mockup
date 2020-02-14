import { graphql, useStaticQuery } from 'gatsby'

const platformsQuery = graphql`
    {
        platforms: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        links {
                            homepage
                            launch
                            documentation
                            learn
                        }
                        teaser
                        service
                        logo {
                            id
                            childImageSharp {
                                fixed(fit: CONTAIN, height: 120) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export const usePlatforms = () => {
    const { platforms } = useStaticQuery(platformsQuery)
    return platforms.edges.map(({ node }) => node)
}

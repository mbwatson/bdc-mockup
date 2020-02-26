import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SEO } from '../components/seo'
import styled from 'styled-components'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { List, ListItem } from '../components/list'
import { ExternalLink } from '../components/link'
import { Container as Grid, Row, Col, Hidden } from 'react-grid-system'
import { usePlatforms } from '../hooks'

const LogoCloud = styled.div`
    text-align: center;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const PlatformImage = styled(Img)`
    margin: 2rem;
`

const AboutPage = ({ data }) => {
    const { platformsAndServicesGraphic } = data
    const platforms = usePlatforms()
        .map(({ frontmatter: { title, path, logo } }) => ({ title, path, logo }))
    
    return (
        <PageContent width="95%" maxWidth="1200px" center gutters>
            <SEO
                title="About BioData Catalyst"
                description=""
                keywords=""
            />

            <Grid>
                <Row>
                    <Hidden xs sm>
                        <Col md={ 3 }>
                            <List style={{ position: 'sticky', top: '16rem', paddingRight: '2rem' }} right>
                                <ListItem primary={ <AnchorLink to="/about#what-we-are">What we Are</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/about#who-we-are">Who we Are</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/about#ecosystem">Our Ecosystem</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/about#platforms">Platforms</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/about#contributing">Contributing</AnchorLink> } />
                            </List>
                        </Col>
                    </Hidden>
                    <Col md={ 9 }>
                        <Title>About BioData Catalyst</Title>
            
                        <section id="what-we-are">
                            <Heading>What We Are</Heading>
            
                            <Paragraph>
                                For research investigators who need to find, access, share, store, cross-link, and compute on large scale data sets,
                                NHLBI BioData Catalyst serves as a cloud-based ecosystem providing tools, applications, and workflows to enable these capabilities in secure workspaces. 
                            </Paragraph>
            
                            <Paragraph>
                                NHLBI BioData Catalyst increases access to NHLBI data sets and innovative data analysis capabilities and accelerates efficient biomedical research
                                that drives discovery and scientific advancement, leading to novel diagnostic tools, therapeutic options, and prevention strategies for heart, lung, blood, and sleep disorders.
                            </Paragraph>
                        </section>
            
                        <br/>
            
                        <section id="who-we-are">
                            <Heading>Who We Are</Heading>
                            
                            <Paragraph>
                                Though the primary goal of the BioData Catalyst project is to build a data science platform, at its core, this is a people-centric endeavor.
                                BioData Catalyst is also building a community of practice working to collaboratively solve technical and scientific challenges.
                            </Paragraph>
            
                            <Paragraph>
                                The BioData Catalyst ecosystem is funded by the National Heart, Lung, and Blood Institute (NHLBI) through a flexible mechanism called Other Transactions (OT).
                                The OT mechanism gives NHLBI considerable flexibility in making and managing awards.
                                This is particularly important for the BioData Catalyst to stay nimble as it approaches the complex tasks involved in the development of this ecosystem
                                under the ever-changing conditions of data science and biomedical science.
                            </Paragraph>
                        </section>
            
                        <br/>

                        <section id="ecosystem">
                            <Heading>The BioData Catalyst Ecosystem</Heading>
                            
                            <Img style={{ width: '90%', margin: 'auto' }} fluid={ platformsAndServicesGraphic.childImageSharp.fluid } />

                        </section>

                        <br/>

                        <section id="platforms">
                            <Heading>Platforms Powering the BioData Catalyst Ecosystem</Heading>

                            <Paragraph>
                                The following platforms make accessing, searching, and analyzing data in the BioData Catalyst ecosystem possible.
                                Learn more about <Link to="/about#ecosystem">how these platforms work together</Link>.
                            </Paragraph>
                            
                            <LogoCloud>
                                {
                                    platforms.map(platform => (
                                        <Link key={ platform.title } to={ platform.path }>
                                            <PlatformImage fixed={ platform.logo.childImageSharp.fixed } alt={ `View details about ${ platform.title.replace('-', ' ') }` } />
                                        </Link>
                                    ))
                                }
                            </LogoCloud>
                        </section>
            
                        <section id="contributing">
                            <Heading>How You Can Contribute</Heading>
                
                            <Paragraph>
                                BioData Catalyst is a dynamic resource that will be continually developed and refined.
                                The BioData Catalyst Consortium solicits feedback on the development of significant processes, emerging standards, and decisions in two main ways:
                            </Paragraph>
                
                            <ol style={{ lineHeight: 2 }}>
                                <li>Ongoing submission and upvoting of ideas via the <ExternalLink to="https://nhlbidatastage.ideascale.com/a/index">NHLBI BioDataCatalyst Ideascale</ExternalLink>.</li>
                                <li>Soliciting feedback through periodic Requests for Comment (RFC).</li>
                            </ol>
                        </section>
                                       

                    </Col>
                </Row>
            </Grid>
        
        </PageContent>
    )
}

export default AboutPage

export const query = graphql`
    {
        platformsAndServicesGraphic: file(relativePath: {eq: "platforms-and-services.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
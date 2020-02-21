import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SEO } from '../components/seo'
import Img from 'gatsby-image'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { List, ListItem } from '../components/list'
import { ExternalLink } from '../components/link'
import { Container as Grid, Row, Col, Hidden } from 'react-grid-system'

const AboutPage = ({ data }) => {
    const { platformsAndServicesGraphic } = data
    
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

                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident a quia odio, adipisci nostrum libero nesciunt soluta neque dolorem, culpa animi harum architecto ad unde earum quam eligendi officia deserunt!
                            </Paragraph>
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
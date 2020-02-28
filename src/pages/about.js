import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SEO } from '../components/seo'
import styled from 'styled-components'
import { PageContent } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { List, ListItem } from '../components/list'
import { ExternalLink } from '../components/link'
import { Container as Grid, Row, Col, Hidden } from 'react-grid-system'
import { usePartners, usePlatforms } from '../hooks'

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

const AboutPage = () => {
    const partners = usePartners()
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
                                The BioData Catalyst ecosystem is funded by the National Heart, Lung, and Blood Institute (NHLBI) designed
                                to be nimble and responsive to the ever-changing conditions of the data and biomedical science community.  
                            </Paragraph>

                            <Subheading>Partners Powering Our Ecosystem</Subheading>

                            <Paragraph>
                                Researchers and other professionals from the following institutions have received funding from NHLBI to work on the BioData Catalyst ecosystem
                            </Paragraph>

                            <List dense>
                                { partners.map(partner => <ListItem primary={ partner.name } secondary={ partner.ota } />) }
                            </List>

                            <Subheading>Platforms Powering Our Ecosystem</Subheading>

                            <Paragraph>
                                The following platforms make accessing, searching, and analyzing data in the BioData Catalyst ecosystem possible.
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

                            <Paragraph>
                                Learn more about <Link to="/about#ecosystem">how these platforms work together</Link>.
                            </Paragraph>
                            
                        </section>
            
                        <section id="contributing">
                            <Heading>How You Can Contribute</Heading>
                
                            <Paragraph>
                                BioData Catalyst is a dynamic resource that will be continually developed and refined.
                                The BioData Catalyst Consortium solicits feedback on the development of significant processes, emerging standards, and decisions in two main ways:
                            </Paragraph>
                
                            <ol style={{ lineHeight: 2 }}>
                                <li>Ongoing submission and upvoting of ideas via the <ExternalLink to="https://biodatacatalyst.ideascale.com/">NHLBI BioDataCatalyst Ideascale</ExternalLink>.</li>
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

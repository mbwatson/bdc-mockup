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
        .sort((p,q) => p.name > q.name)
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
                                <ListItem primary={ <AnchorLink to="/about#contributing">Contribute</AnchorLink> } />
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
                                { partners.map(partner => <ListItem primary={ partner.name } />) }
                            </List>

                            <Subheading>Platforms Powering Our Ecosystem</Subheading>

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

                        <br/>

                        <section id="ecosystem">
                            <Heading>Our Ecosystem</Heading>

                            <Paragraph>
                                For heart, lung, blood, and sleep researchers, the BioData Catalyst ecosystem offers several platforms and services to explore and analyze
                                both private and publicly-hosted datasets in the cloud using pre-built and custom workflows.
                            </Paragraph>

                            <Subheading>Want to understand more about the BioData Catalyst Ecosystem?</Subheading>

                            <Paragraph>
                                In the BioData Catalyst system, researchers interact with data, workspaces, and tools to perform their data analyses.
                                Researchers can use data hosted within the ecosystem or bring their own data to the ecosystem. 
                            </Paragraph>

                            <Paragraph>
                                Researchers who wish to use BioData Catalyst hosted data will find NHLBI Trans-Omics for Precision Medicine (TOPMed) CRAMS, Single-sample VCFs, Multi-sample VCFs (tar), and phenotypic data files.
                                BioData Catalyst data is hosted in cloud storage and is managed by Gen3 to offer federated access to the hosted data, including access controls and indexing.
                            </Paragraph>

                            <Paragraph>
                                Researchers who are approved to work with hosted data can search through datasets and form cohorts that they can export to an analysis workspace.
                                Researchers do this using one of two platforms integrated into BioData Catalyst, PIC-Sure (search phenotypic data and build cohorts) or Windmill (search data and build cohorts).
                            </Paragraph>

                            <Paragraph>
                                Once researchers have completed their searches and created cohorts, they can use one of three platforms integrated into BioData Catalyst to analyze data at scale in cloud-based environments
                                &mdash; SevenBridges (interactive analysis using Jupyterlab or RStudio), Dockstore (reproducible workflows, CWL, WDL, NFL), and Terra (Interactive Analysis using Jupyter notebooks).
                            </Paragraph>

                            <Paragraph>
                                Researchers with their own data may bring private data sets or public data that is not currently hosted on BioData Catalyst to use the ecosystem’s workspaces and tools.
                                These researchers import their data directly into one of the three platform workspaces – SevenBridges, Dockstore, or Terra.
                            </Paragraph>
                        </section>
            
                        <section id="contributing">
                            <Heading>Contribute to the Ecosystem Development</Heading>
                
                            <Paragraph>
                                BioData Catalyst is a dynamic resource that will be continually developed and refined.
                                The BioData Catalyst Consortium solicits feedback on the development of significant processes, emerging standards, and decisions in two main ways:
                            </Paragraph>
                
                            <ol style={{ lineHeight: 2 }}>
                                <li>Ongoing submission and upvoting of ideas via the <ExternalLink to="https://biodatacatalyst.ideascale.com/">NHLBI BioDataCatalyst Ideascale</ExternalLink>.</li>
                                <li>Periodic Requests for Comment (RFC) solicitations.</li>
                            </ol>
                        </section>

                    </Col>
                </Row>
            </Grid>
        
        </PageContent>
    )
}

export default AboutPage

import React, { Fragment } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { Container as Grid, Row, Col, Visible, Hidden } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../../components/card'
import { List, ListItem } from '../../components/list'
import { ExternalLink } from '../../components/link'
import { usePlatforms } from '../../hooks'

const ToolLinks = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 2rem 0;
`

const InternalToolLink = styled(Link)`
    margin: 0 0.5rem;
`

const ExternalToolLink = styled(ExternalLink)`
    margin: 0 0.5rem;
`

const Separator = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    ${ props => props.horizontal && `margin: 1rem 0;` }
    &::after {
        content: "";
        position: absolute;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        opacity: 0.25;
        ${
            props => props.horizontal && `
                top: 0%;
                height: 1px;
                width: 80%;
                border-image: linear-gradient(to right, transparent 0%, var(--color-crimson) 15% 85%, transparent 100%) 1 1;
            `
        }
        ${
            props => props.vertical && `
                top: 50%;
                height: 80%;
                width: 1px;
                border-image: linear-gradient(to top, transparent 0%, var(--color-crimson) 15% 85%, transparent 100%) 1 1;
            `
        }
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const ServicesPage = ({ data }) => {
    const { platformsAndServicesGraphic } = data
    const platforms = usePlatforms()
    
    const services = [
        {
            cardTitle: 'Explore Available Data',
            cardItems: [
                platforms.find(platform => platform.frontmatter.title === 'Gen3'),
                platforms.find(platform => platform.frontmatter.title === 'PIC-SURE'),
            ]
        },
        {
            cardTitle: 'Analyze Data in Cloud-based Shared Workspaces',
            cardItems: [
                platforms.find(platform => platform.frontmatter.title === 'Seven Bridges'),
                platforms.find(platform => platform.frontmatter.title === 'Terra'),
            ]
        },
        {
            cardTitle: 'Use Community Tools on Controlled-access Datasets',
            cardItems: [
                platforms.find(platform => platform.frontmatter.title === 'Dockstore'),
                platforms.find(platform => platform.frontmatter.title === 'HeLx'),
            ]
        },
    ]

    return (
        <PageContent width="95%" maxWidth="1200px" center gutters>
            <SEO
                title="Platforms & Services"
                description=""
                keywords=""
            />
            <Grid>
                <Row>
                    <Hidden xs sm>
                        <Col md={ 3 }>
                            <List style={{ position: 'sticky', top: '16rem', paddingRight: '2rem' }} right>
                                <ListItem primary={ <AnchorLink to="/resources/services#ecosystem">Our Ecosystem</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/resources/services#actions">What Do You Want To Do Today?</AnchorLink> } />
                                <ListItem primary={ <AnchorLink to="/resources/services#imputation-server">Imputation Server</AnchorLink> } />
                            </List>
                        </Col>
                    </Hidden>
                    <Col>
                        <Title>Platforms and Services</Title>

                        <Heading id="ecosystem">Explore the BioData Catalyst Ecosystem</Heading>
                        
                        <Paragraph>
                            For heart, lung, blood, and sleep researchers, the BioData Catalyst ecosystem offers
                            several platforms and services to explore and analyze both private and publicly-hosted datasets
                            in the cloud using pre-built and custom workflows.
                        </Paragraph>

                        <Img style={{ width: '90%', margin: 'auto' }} fluid={ platformsAndServicesGraphic.childImageSharp.fluid } />

                        <br/>
                        
                        <Heading id="actions">What Do You Want to Do Today?</Heading>

                        {
                            services.map((service, i) => (
                                <Row key={ i }>
                                    <Card key={ service.cardTitle }>
                                        <CardHeader>{ service.cardTitle }</CardHeader>
                                        <CardBody>
                                            <Grid fluid>
                                                <Row gutterWidth={ 0 }>
                                                    {
                                                        service.cardItems.map((platform, i) => (
                                                            <Fragment key={ i }>
                                                                <Col xs={ 12 } lg={ 5 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                                    <h3 style={{ textAlign: 'center' }}>BioData Catalyst powered by { platform.frontmatter.title }</h3>
                                                                    <Paragraph>
                                                                        { platform.frontmatter.service }
                                                                    </Paragraph>
                                                                    <ToolLinks>
                                                                        <ExternalToolLink to={ platform.frontmatter.links.launch }>Launch</ExternalToolLink>
                                                                        | 
                                                                        <ExternalToolLink to={ platform.frontmatter.links.documentation }>Documentation</ExternalToolLink>
                                                                        | 
                                                                        <InternalToolLink to={ platform.frontmatter.path }>Learn</InternalToolLink>
                                                                    </ToolLinks>
                                                                </Col>
                                                                {
                                                                    i + 1 < service.cardItems.length && (
                                                                        <Fragment>
                                                                            <Visible lg xl>
                                                                                <Col md={ 2 }>
                                                                                    <Separator vertical />
                                                                                </Col>
                                                                            </Visible>
                                                                            <Visible xs sm md>
                                                                                <Col xs={ 12 }>
                                                                                    <Separator horizontal />
                                                                                </Col>
                                                                            </Visible>                                                
                                                                        </Fragment>
                                                                    )
                                                                }
                                                            </Fragment>
                                                        ))
                                                    }
                                                </Row>
                                            </Grid>
                                        </CardBody>
                                    </Card>
                                </Row>
                            ))
                        }

                        <section id="imputation-server">
                            <Heading id="actions">Imputation Server</Heading>
                            <Card>
                                <CardHeader>Access the Imputation Server</CardHeader>
                                <CardBody>
                                    <h3 style={{ textAlign: 'center' }}> Imputation Server developed by the University of Michigan</h3>
                                    <Paragraph>
                                        Upload your own phased or unphased GWAS genotypes to the server and receive phased and imputed genomes in return.
                                        The server offers imputation from various reference panels including the TOPMed reference panel. 
                                    </Paragraph>
                                    <ToolLinks>
                                        <ExternalToolLink to="http://imputation.biodatacatalyst.nhlbi.nih.gov">Launch</ExternalToolLink>
                                        | 
                                        <ExternalToolLink to="https://imputationserver.readthedocs.io/en/latest/">Documentation</ExternalToolLink>
                                        | 
                                        <InternalToolLink to="https://pubmed.ncbi.nlm.nih.gov/27571263-next-generation-genotype-imputation-service-and-methods/">Learn</InternalToolLink>
                                    </ToolLinks>
                                </CardBody>
                            </Card>
                        </section>

                    </Col>
                </Row>    
            </Grid>
            
        </PageContent>
    )
}

export default ServicesPage

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
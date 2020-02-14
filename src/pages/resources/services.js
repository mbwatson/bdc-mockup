import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { Card, CardHeader, CardBody } from '../../components/card'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { ExternalLink } from '../../components/link'

const services = [
    {
        cardTitle: 'Explore Available Data',
        cardItems: [
            {
                platform: 'Gen3',
                description: `
                    Use this platform to discover and learn more about variables in TOPMed projects and to apply for access through dbGaP.
                    Gen3 also allows for search through hosted data and for creating synthetic cohorts of interest and exporting the data to an analysis environment.
                `,
                links: {
                    launch: 'https://gen3.datastage.io/',
                    documentation: '',
                    learnMore: '/platforms/gen3',
                },
            },
            {
                platform: 'PIC-SURE',
                description: `
                    Explore available data through BioData Catalyst powered by PIC-SURE with interactive search and visualizations for feasibility assessment.
                    Use query results to create a cohort, with the ability to choose specific variables of interest to export into an analysis environment.
                `,
                links: {
                    launch: 'https://biodatacatalyst.integration.hms.harvard.edu/psamaui/login/?redirection_url=/picsureui/',
                    documentation: '',
                    learnMore: '/platforms/pic-sure',
                },
            },
        ]
    },
    {
        cardTitle: 'Analyze Data in Cloud-based Shared Workspaces',
        cardItems: [
            {
                platform: 'Seven Bridges',
                description: `
                    With this platform users can utilize collaborative workspaces for analyzing genomics data at scale.
                    Access hosted datasets along with Common Workflow Language pipelines for analysis.
                    This platform also enables users to bring their own data for analysis and work in RStudio and Jupyterlab Notebooks for interactive analysis.
                `,
                links: {
                    launch: 'https://f4c-accounts.sbgenomics.com/auth/login?next=https%3A%2F%2Ff4c-accounts.sbgenomics.com%2Foauth2%2Fauthorization%3Fresponse_type%3Dcode%26client_id%3D74735b722c33498cb981b6b6e24f659f%26redirect_uri%3Dhttps%253A%252F%252Ff4c.sbgenomics.com%252Foauth2%252Fredirect%26scope%3Dopenid%26state%3DD9lNrFc8pMySUALiuvewZkO0LGl8oc%26nonce%3D111038105642055197041580917835',
                    documentation: '',
                    learnMore: '/platforms/seven-bridges',
                },
            },
            {
                platform: 'Terra',
                description: `
                    This scalable cloud-based platform can be used for democratizing genomic data access and for sharing and computing across large genomic and genomic-related data sets.
                    Terra offers a stand-alone computational workspace model that provides a secure collaborative place to organize data, run and monitor analysis pipelines, and perform interactive analysis using applications such as Jupyter Notebooks.
                `,
                links: {
                    launch: 'https://datastage.terra.bio/',
                    documentation: '',
                    learnMore: '/platforms/terra',
                },
            },
        ]
    },
    {
        cardTitle: 'Use Community Tools on Controlled-access Datasets',
        cardItems: [
            {
                platform: 'Dockstore',
                description: `
                    Via Dockstore, users can search from a catalogue of high-quality Docker-based workflows that easily export to platforms such as Terra or Seven Bridges.
                    Explore organization pages to find collections of workflows from labs, institutions, and consortiums or create a page to share your work with the wider bioinformatics community.
                `,
                links: {
                    launch: 'https://dockstore.org/',
                    documentation: '',
                    learnMore: '/platforms/dockstore',
                },
            },
            {
                platform: 'HeLx',
                description: `
                    HeLx is a web-based platform for collaborative open science. It provides metadata aware data management capabilities with extensive support for sharing and access control.
                    The AppStore also presents tools that can be dynamically launched for each user.
                `,
                links: {
                    launch: 'https://helx.commonsshare.org/',
                    documentation: '',
                    learnMore: '/platforms/helx',
                },
            },
        ]
    },
]

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

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="Platforms & Services"
                description=""
                keywords=""
            />

            <Title>Platforms and services</Title>

            <Heading>Explore the BioData Catalyst ecosystem</Heading>
            
            <Paragraph>
                For academic heart, lung, blood, and sleep researchers (with access to TOPMed data and capacity to analyze it),
                the BioData Catalyst ecosystem provides researchers with several platforms and services
                for exploring and analyzing both private and publicly hosted datasets in the cloud using pre-built and custom workflows.
            </Paragraph>
            
            <Img style={{ width: '90%', margin: 'auto' }} fluid={ platformsAndServicesGraphic.childImageSharp.fluid } />
            
            <br/>
            
            <Heading>What do you want to do today?</Heading>

            {
                services.map(service => (
                    <Card key={ service.cardTitle }>
                        <CardHeader>{ service.cardTitle }</CardHeader>
                        <CardBody>
                            <Grid fluid>
                                <Row gutterWidth={ 0 }>
                                    {
                                        service.cardItems.map((item, i) => (
                                            <Fragment key={ i }>
                                                <Col xs={ 12 } md={ 5 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <h3 style={{ textAlign: 'center' }}>BioData Catalyst powered by { item.platform }</h3>
                                                    <Paragraph>
                                                        { item.description }
                                                    </Paragraph>
                                                    <ToolLinks>
                                                        <ExternalToolLink to={ item.links.launch }>Launch</ExternalToolLink>
                                                        | 
                                                        <ExternalToolLink to={ item.links.documentation }>Documentation</ExternalToolLink>
                                                        | 
                                                        <InternalToolLink to={ item.links.learnMore }>Learn More</InternalToolLink>
                                                    </ToolLinks>
                                                </Col>
                                                {
                                                    i + 1 < service.cardItems.length&& (
                                                        <Fragment>
                                                            <Visible md lg xl>
                                                                <Col md={ 2 }>
                                                                    <Separator vertical />
                                                                </Col>
                                                            </Visible>
                                                            <Visible xs sm>
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
                ))
            }

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
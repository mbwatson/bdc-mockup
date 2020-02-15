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
    
    console.log(platforms)
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

    console.log(services)

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
                                        service.cardItems.map((platform, i) => (
                                            <Fragment key={ i }>
                                                <Col xs={ 12 } md={ 5 } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                    <h3 style={{ textAlign: 'center' }}>BioData Catalyst powered by { platform.frontmatter.title }</h3>
                                                    <Paragraph>
                                                        { platform.frontmatter.service }
                                                    </Paragraph>
                                                    <ToolLinks>
                                                        <ExternalToolLink to={ platform.frontmatter.links.launch }>Launch</ExternalToolLink>
                                                        | 
                                                        <ExternalToolLink to={ platform.frontmatter.links.documentation }>Documentation</ExternalToolLink>
                                                        | 
                                                        <InternalToolLink to={ platform.frontmatter.links.learn }>Learn More</InternalToolLink>
                                                    </ToolLinks>
                                                </Col>
                                                {
                                                    i + 1 < service.cardItems.length && (
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
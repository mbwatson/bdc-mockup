import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { Card, CardHeader, CardBody } from '../../components/card'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { ExternalLink } from '../../components/link'
import { usePlatforms } from '../../hooks'
import ServiceDataSvg from '../../images/service-ecosystem/service-data.svg' 
import ServiceSearchSvg from '../../images/service-ecosystem/service-search.svg' 
import ServiceAnalysisSvg from '../../images/service-ecosystem/service-analysis.svg' 
import ServiceDataSvgMobile from '../../images/service-ecosystem/mobile_service-data.svg' 
import ServiceSearchSvgMobile from '../../images/service-ecosystem/mobile_service-search.svg' 
import ServiceAnalysisSvgMobile from '../../images/service-ecosystem/mobile_service-analysis.svg' 
import { useWindowWidth } from '../../hooks'

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

const marchAnimation = keyframes`
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 6; }
`

const AnimateDashedBorder = styled.div`
    .dashed-border {
        animation: ${ marchAnimation } 4000ms linear infinite;
    }
`

const ServicesPage = ({ data }) => {
    const { isCompact } = useWindowWidth()
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
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="Platforms & Services"
                description=""
                keywords=""
            />

            <Title>Platforms and Services</Title>

            <Heading>Explore the BioData Catalyst Ecosystem</Heading>
            
            <Paragraph>
                For academic heart, lung, blood, and sleep researchers (with access to TOPMed data and capacity to analyze it),
                the BioData Catalyst ecosystem several platforms and services to explore and analyze
                both private and publicly hosted datasets in the cloud using pre-built and custom workflows.
            </Paragraph>
                        
            {
                /**
                *    TODO
                *    - add <title>s in SVGs
                *    - <desc>s ?
                *    - swap in mobile versions
                *    - make all IDs unique across all SVGs
                *    - unrelated, but get at least 64x64 favicon
                **/
            }

            <br/>
            
            {
                isCompact
                    ? <AnimateDashedBorder><ServiceDataSvgMobile width="100%" height="none" /></AnimateDashedBorder>
                    : <AnimateDashedBorder><ServiceDataSvg width="100%" height="none" /></AnimateDashedBorder>
            }

            <br/>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates, perspiciatis aut doloremque porro reprehenderit repudiandae. Amet nostrum adipisci, impedit vero necessitatibus quam reiciendis tenetur ipsam ab itaque repudiandae cumque voluptas totam nemo unde sed, alias aliquam qui, debitis obcaecati sunt! A maxime provident porro.
            </Paragraph>

            <br/>
            
            {
                isCompact
                    ? <AnimateDashedBorder><ServiceSearchSvgMobile width="100%" height="none" /></AnimateDashedBorder>
                    : <AnimateDashedBorder><ServiceSearchSvg width="100%" height="none" /></AnimateDashedBorder>
            }

            <br/>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt animi mollitia ex, vitae quidem. Corrupti amet quae pariatur, eligendi et nihil consequatur! Labore mollitia consequatur asperiores, vitae repellendus? Illum excepturi numquam molestiae ex praesentium. Fugiat repellendus nobis, at, blanditiis ad ullam reprehenderit perferendis explicabo reiciendis!
            </Paragraph>
            
            <br/>

            {
                isCompact
                    ? <AnimateDashedBorder><ServiceAnalysisSvgMobile width="100%" height="none" /></AnimateDashedBorder>
                    : <AnimateDashedBorder><ServiceAnalysisSvg width="100%" height="none" /></AnimateDashedBorder>
            }
            
            <br/>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga ratione eveniet, inventore. Beatae, aperiam sunt repellendus. Nobis cum impedit dolore alias officia voluptatem nesciunt, tempora totam iure consequatur modi atque facilis velit consectetur corrupti nihil. Deleniti nesciunt saepe placeat ullam, amet fuga voluptates et.
            </Paragraph>

            <br/>
            
            <Heading>What Do You Want to Do Today?</Heading>

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
                                                        <InternalToolLink to={ platform.frontmatter.path }>Learn More</InternalToolLink>
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
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import styled from 'styled-components'
import { Heading, Paragraph } from '../components/typography'
import { Card, CardHeader, CardBody } from '../components/card'
import { PageContent, Container } from '../components/layout'
import { DataCarousel } from '../components/data-carousel'
import { HexMenu } from '../components/menus'
import { BulletedList, ListItem } from '../components/list'
import { SlideTray } from '../components/slide-tray'
import { Hidden } from 'react-grid-system'
import SickleCellImage from '../images/sickle-cell.jpg'
import CdcScientistImage from '../images/cdc-scientist.jpg'
import { usePartners, usePlatforms } from '../hooks'

const LogoCloud = styled.div`
    text-align: center;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const MutedImage = styled(Img)`
    margin: 1rem;
    transition: filter 250ms;
    filter: saturate(25%) opacity(50%);
    &:hover {
        filter: saturate(100%) opacity(100%);
    }
`

const IndexPage = () => {
    const partners = usePartners()
    const platforms = usePlatforms()
        .map(({ frontmatter: { title, path, logo } }) => ({ title, path, logo }))

    return (
        <PageContent>
            <SEO
                title="Home"
                description=""
                keywords=""
            />

            <DataCarousel />

            <Container width="90%" maxWidth="1200px" center style={{ marginTop: '0' }}>
                
                <Hidden xs sm md>
                    <HexMenu />
                </Hidden>

                <Card>
                    <CardHeader size="large">
                        What is BioData Catalyst?
                    </CardHeader>
                    <CardBody image={{ placement: 'right', path: SickleCellImage }}>
                        <Paragraph>
                            NHLBI BioData Catalyst is a cloud-based platform providing tools, applications, and workflows in secure workspaces.
                            By increasing access to NHLBI datasets and innovative data analysis capabilities,
                            BioData Catalyst accelerates efficient biomedical research that drives discovery and scientific advancement,
                            leading to novel diagnostic tools, therapeutics, and prevention strategies for heart, lung, blood, and sleep disorders.
                        </Paragraph>
                        <Paragraph>
                            Though the primary goal of the BioData Catalyst project is to build a data science platform, at its core, this is a people-centric endeavor.
                            BioData Catalyst is also building a community of practice working in parallel to collaboratively solve technical challenges. 
                        </Paragraph>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader size="large">
                        What can BioData Catalyst do for you?
                    </CardHeader>
                        <CardBody image={{ placement: 'left', path: CdcScientistImage }}>
                        <Paragraph>
                            BioData Catalyst allows NHLBI researchers to find, access, share, store, cross-link, and compute on large scale datasets. On the platform, researchers will be able to: 
                        </Paragraph>
                        <BulletedList>
                            <ListItem primary="Construct and enhance annotated metadata for NHLBI datasets that comply with FAIR data principles" />
                            <ListItem primary="Design and test tools that search and analyze the unique characteristics of NHLBI datasets, and that also group data based on certain shared characteristics so that researchers can test hypotheses" />
                            <ListItem primary="Use BioData Catalyst’s capabilities to integrate NHLBI imaging data with TOPMed data" />
                            <ListItem primary="Establish and support secure workspaces for collaborative analysis specialized for NHLBI datasets and HLBS research, using a platform that brings the computation to the data, not the data to the computation" />
                        </BulletedList>
                    </CardBody>
                </Card>
                
                <br/>
                
                <section id="partners">
                    <Heading center>Partner Institutions</Heading>

                    <Paragraph>
                        Researchers and other professionals from the following institutions have received OTA funding from NHLBI to work on the BioData Catalyst ecosystem.
                    </Paragraph>
                    
                    <SlideTray title="" trayHeight="calc(80px + 2rem)">
                        {
                            partners.map(
                                partner => (
                                    <MutedImage key={ partner.image.id } fixed={ partner.image.childImageSharp.fixed } alt={ `${ partner.name } logo` } />
                                )
                            )
                        }
                    </SlideTray>
                </section>

                <br/>
                
                <section id="platforms">
                    <Heading center>Platforms Powering the BioData Catalyst Ecosystem</Heading>

                    <Paragraph>
                        The following platforms make accessing, searching, and analyzing data in the BioData Catalyst ecosystem possible.
                        Learn more about <Link to="/about#ecosystem">how these platforms work together</Link>.
                    </Paragraph>
                    
                    <LogoCloud>
                        {
                            platforms.map(platform => (
                                <Link key={ platform.title } to={ platform.path }>
                                    <MutedImage fixed={ platform.logo.childImageSharp.fixed } alt={ `${ platform.title.replace('-', ' ') } logo` } />
                                </Link>
                            ))
                        }
                    </LogoCloud>
                </section>
                
            </Container>

        </PageContent>
    )
}

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { usePartners, usePlatforms } from '../hooks'
import Img from 'gatsby-image'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { ExternalLink } from '../components/link'

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

const AboutPage = () => {
    const partners = usePartners()
    const platforms = usePlatforms()
        .map(({ frontmatter: { title, path, logo } }) => ({ title, path, logo }))
    
    console.table(platforms)

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="About BioData Catalyst"
                description=""
                keywords=""
            />
        
            <Title>About BioData Catalyst</Title>

            <Heading>What we are</Heading>

            <Paragraph>
                For research investigators who need to find, access, share, store, cross-link, and compute on large scale data sets,
                NHLBI BioData Catalyst serves as a cloud-based ecosystem providing tools, applications, and workflows to enable these capabilities in secure workspaces. 
            </Paragraph>

            <Paragraph>
                NHLBI BioData Catalyst increases access to NHLBI data sets and innovative data analysis capabilities and accelerates efficient biomedical research
                that drives discovery and scientific advancement, leading to novel diagnostic tools, therapeutic options, and prevention strategies for heart, lung, blood, and sleep disorders.
            </Paragraph>

            <Heading>Who we are</Heading>
            
            <Paragraph>
                Though the primary goal of the BioData Catalyst project is to build a data science platform, at its core, this is a people-centric endeavor.
                BioData Catalyst is also building a community of practice working in parallel to collaboratively solve technical challenges.
            </Paragraph>

            <Paragraph>
                The BioData Catalyst ecosystem is funded by a flexible mechanism called Other Transactions (OT).
                The OT mechanism gives NHLBI considerable flexibility in making and managing awards.
                This is particularly important for the BioData Catalyst to stay nimble as it approaches the complex tasks involved in the development of this ecosystem
                under the ever-changing conditions of data science and biomedical science.
            </Paragraph>

            <Paragraph>
                Currently, researchers and other professionals from the following institutions have received OTA funding from the NHLBI to work on the BioData Catalyst ecosystem:
            </Paragraph>
            
            <LogoCloud>
                {
                    partners.map(
                        partner => (
                            <MutedImage key={ partner.image.id } fixed={ partner.image.childImageSharp.fixed } alt={ `${ partner.name } logo` } />
                        )
                    )
                }
            </LogoCloud>

            <Heading>Platforms powering our ecosystem</Heading>
            
            <LogoCloud>
                {
                    platforms.map(platform => (
                        <Link key={ platform.title } to={ platform.path }>
                            <MutedImage fixed={ platform.logo.childImageSharp.fixed } alt={ `${ platform.title.replace('-', ' ') } logo` } />
                        </Link>
                    ))
                }
            </LogoCloud>


            <Heading>How you can contribute</Heading>

            <Paragraph>
                BioData Catalyst is a dynamic resource that will be continually developed and refined.
                The BioData Catalyst Consortium solicits feedback on the development of significant processes, emerging standards, and decisions in two main ways:
            </Paragraph>

            <ol style={{ lineHeight: 2 }}>
                <li>Ongoing submission and upvoting of ideas via the <ExternalLink to="https://nhlbidatastage.ideascale.com/a/index">NHLBI BioDataCatalyst Ideascale</ExternalLink>.</li>
                <li>A periodic Request for Comment (RFC) process solicits feedback from BioData Catalyst members and NHLBI. </li>
            </ol>
                           
        </PageContent>
    )
}

export default AboutPage

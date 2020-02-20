import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { SEO } from '../components/seo'
import { usePartners, usePlatforms } from '../hooks'
import Img from 'gatsby-image'
import { PageContent } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { ExternalLink } from '../components/link'
import ServiceDataSvg from '../images/service-ecosystem/service-data.svg' 
import ServiceSearchSvg from '../images/service-ecosystem/service-search.svg' 
import ServiceAnalysisSvg from '../images/service-ecosystem/service-analysis.svg' 
import ServiceDataSvgMobile from '../images/service-ecosystem/mobile_service-data.svg' 
import ServiceSearchSvgMobile from '../images/service-ecosystem/mobile_service-search.svg' 
import ServiceAnalysisSvgMobile from '../images/service-ecosystem/mobile_service-analysis.svg' 
import { useWindowWidth } from '../hooks'

const marchAnimation = keyframes`
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 6; }
`

const AnimateDashedBorder = styled.div`
    .dashed-border {
        animation: ${ marchAnimation } 4000ms linear infinite;
    }
`

const AboutPage = () => {
    const { isCompact } = useWindowWidth()
    const partners = usePartners()
    const platforms = usePlatforms()
        .map(({ frontmatter: { title, path, logo } }) => ({ title, path, logo }))
    
    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="About BioData Catalyst"
                description=""
                keywords=""
            />
        
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
                <Heading>How the BioData Catalyst Ecosystem Works</Heading>

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quos libero quaerat cum ipsum, impedit accusantium exercitationem voluptatem obcaecati. Fugit voluptates est repudiandae eveniet harum earum eaque id ut porro fugiat ad quo eum iure, vitae reiciendis sapiente cumque accusamus ipsum distinctio iusto necessitatibus aspernatur?
                </Paragraph>

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
            </section>

            <br/>
            
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
                           
        </PageContent>
    )
}

export default AboutPage

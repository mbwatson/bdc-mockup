import React from 'react'
import Img from 'gatsby-image'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../../components/typography'
import { BulletedList, ListItem } from '../../components/list'
import { ExternalButtonLink } from '../../components/buttons'
import { ExternalLink } from '../../components/link'

const DataPage = ({ data }) => {
    const { dataBucketsGraphic } = data

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>
            <SEO
                title="BioData Catalyst Data Access"
                description=""
                keywords=""
            />

            <Title>Data Access on BioData Catalyst</Title>
            
            <Heading>Gain access to BioData Catalyst data</Heading>

            <Paragraph>
                The BioData Catalyst ecosystem hosts a number of controlled datasets from the Trans-omics for Precision Medicine (<ExternalLink to="https://www.nhlbiwgs.org/">TOPMed</ExternalLink>) initiative.
                Access to these hosted datasets is controlled programmatically by services within the BioData Catalyst ecosystem for user authentication and authorization.
                Users log into BioData Catalyst platforms using their eRA Commons credentials and authentication is performed by iTrust.
            </Paragraph>
            
            <br/>

            <Heading>Check your data access</Heading>

            <Paragraph>
                Login below with your eRA Commons ID to view the data sets to which you have access.
            </Paragraph>

            <Paragraph center>
                <ExternalButtonLink to="https://gen3.datastage.io/user/oauth2/authorize?idp=fence&client_id=xMhuXjGdk9zpzdJjufEinh3nKzOUKOTFZcwzU5xT&redirect_uri=https%3A%2F%2Fbdc-mockup.netlify.com&response_type=id_token+token&scope=openid+user&nonce=2bfe151af238d21f48d818bf8bbec408838c8dc0ace6b4c5621ac9dfa157798b">Check my Access</ExternalButtonLink>
            </Paragraph>

            <br/>

            <Heading>How data access works on BioData Catalyst</Heading>

            <Paragraph>
                The BioData Catalyst ecosystem manages user access to the hosted controlled data using data access approvals from the NIH Database of Genotypes and Phenotypes (dbGaP).
                Therefore, users who want to access one or more of the hosted controlled studies on the ecosystem must be approved for access to that study in dbGaP.
            </Paragraph>
            
            <Img style={{ width: '90%', margin: 'auto' }} fluid={ dataBucketsGraphic.childImageSharp.fluid } />
            
            <br/>
            
            <Subheading>Data access highlights</Subheading>

            <BulletedList>
                <ListItem primary={ `
                    Principal Investigators (PIs) who have approved Data Access Requests (DARs) on dbGaP for the BioData Catalyst datasets will be able to programmatically access those data on the platforms and services within the BioData Catalyst ecosystem.
                ` } />
                <ListItem primary={
                    <span>
                        PIs with an approved DAR can enable their lab staff to access the hosted datasets on the BioData Catalyst ecosystem by giving the lab staff "designated downloader status" on dbGaP.
                        { ' ' }<ExternalLink to="https://www.youtube.com/watch?v=Yem3OH26kX4&t=1s">Learn more about this process</ExternalLink>.
                    </span>
                } />
                <ListItem primary={ `
                    Please note that having other researchers listed on your dbGaP DAR application as internal and external collaborators will not result in these individuals having access to hosted dataset on BioData Catalyst.
                    PIs will need to add internal collaborators from their dbGaP application to the list of designated downloaders as described above.
                    In addition, external collaborators will need to go through this same process for those at their own institution.
                ` }/>
            </BulletedList>

        </PageContent>
    )
}

export default DataPage

export const query = graphql`
    {
        dataBucketsGraphic: file(relativePath: {eq: "data-buckets.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
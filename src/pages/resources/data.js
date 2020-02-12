import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { BulletedList, ListItem } from '../../components/list'
import { ExternalButtonLink } from '../../components/buttons'
import { ExternalLink } from '../../components/link'

const DataPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Available Data"
            description=""
            keywords=""
        />

        <Title>Data</Title>
        
        <Heading>How data works on BioData Catalyst</Heading>

        <Paragraph>
            BioData Catalyst hosts a number of controlled datasets from the <ExternalLink to="https://www.nhlbiwgs.org/">Trans-omics for Precision Medicine</ExternalLink> (TOPMed) initiative.
            These datasets are stored in Amazon Web Services and Google Cloud storage buckets operated by NHLBI such that the BioData Catalyst ecosystem enables users to access the same copy of the data.
            Access to these hosted datasets is controlled programmatically by services within the BioData Catalyst ecosystem for user authentication and authorization.
            Users log into BioData Catalyst platforms using their eRA Commons credentials and authentication is performed by iTrust.
        </Paragraph>

        <Paragraph>
            The BioData Catalyst ecosystem manages user access to the hosted controlled data using data access approvals from the NIH Database of Genotypes and Phenotypes (dbGaP).
            Therefore, users who want to access one or more of the hosted controlled studies on the ecosystem must be approved for access to that study in dbGaP.
            Principal Investigators who have approved Data Access Requests (DARs) on dbGaP for the BioData Catalyst datasets will be able to programmatically access those data on the platforms and services within the BioData Catalyst ecosystem.
        </Paragraph>

        <Paragraph>
            Principal Investigators with an approved DAR can enable their lab staff to access the hosted datasets on the BioData Catalyst ecosystem by giving the lab staff "designated downloader status" on dbGaP.
            These individuals must:
        </Paragraph>

        <BulletedList dense>
            <ListItem primary={ <span>Have an eRA commons account or an NIH username and password.
                <ExternalLink to="https://era.nih.gov/commons/#Commons/1_Admin/mgacct_create.htm%3FTocPath%3D_____24">Please see these instructions</ExternalLink>.</span> } />
            <ListItem primary="Log in to dbGaP at least once" />
        </BulletedList>

        <Paragraph>
            Please refer to <ExternalLink to="https://www.youtube.com/watch?v=Yem3OH26kX4&t=1s">these instructions</ExternalLink> to give lab staff downloader status.
        </Paragraph>

        <Paragraph>
            Please note that having other researchers listed on your dbGaP DAR application as internal and external collaborators will not result in these individuals getting access to hosted dataset on BioData Catalyst.
            PIs will need to add internal collaborators from their dbGaP application to the list of designated downloaders as described above.
            In addition, external collaborators will need to go through this same process for those at their own institution.

        </Paragraph>

        <Paragraph>
            Please note that researchers also have the option to bring their own datasets to the BioData Catalyst platforms.
            Both BioData Catalyst powered by Seven Bridges and BioData Catalyst powered by Terra enable users to bring their own data directly to a workspace for analysis.
            As described in the <ExternalLink to="#">BioData Catalyst Data Use Policy</ExternalLink>, users can upload data for which they have the appropriate approvals
            provided that they do not violate the terms of their Data Use Agreements, Limitations, or Institutional Review Board policies and guidelines.
            To learn more about how to bring your own data to BioData Catalyst, please refer to the documentation for Seven Bridges and Terra.
        </Paragraph>
        
        <Heading>Check my Data Access</Heading>

        <Paragraph>
            Login below with your ERA Commons ID to view the data sets to which you have access.
        </Paragraph>

        <Paragraph center>
            <ExternalButtonLink to="https://gen3.datastage.io/user/oauth2/authorize?idp=fence&client_id=xMhuXjGdk9zpzdJjufEinh3nKzOUKOTFZcwzU5xT&redirect_uri=https%3A%2F%2Fbdc-mockup.netlify.com&response_type=id_token+token&scope=openid+user&nonce=2bfe151af238d21f48d818bf8bbec408838c8dc0ace6b4c5621ac9dfa157798b">Check my Access</ExternalButtonLink>
        </Paragraph>

        <Heading>Want More Data?</Heading>

        <Paragraph>
            More data is available through <ExternalLink ti="https://dbgap.ncbi.nlm.nih.gov">dbGap</ExternalLink>.
            Visit dbGAP and submit a Data Access Request (DAR).
        </Paragraph>

        <Paragraph>
            The NHLBI-supported BioData Catalyst is cloud-based infrastructure where heart, lung, blood, and sleep researchers can go to find, search, access, share, cross-link, and compute on large scale datasets in which they are authorized to access.
            It provides tools, applications, and workflows to enable those capabilities in secure workspaces.
            BioData Catalyst operates on Amazon Web Services (AWS) and Google Cloud Platform (GCP).
            Both AWS and GCP have received an Authority to Operate (ATO) from the General Services Administration FedRAMP (www.fedramp.gov) following a rigorous assessment process by a third party assessor.
            The NHLBI Chief Information Officer has reviewed the System Security Plan from each system that comprises the DataSTAGE environment and has issued an ATO for their system to operate at the Moderate level.
            This type of authorization is consistent with the National Institute of Standards and Technology guidance and complies with all requirements of the Federal Information Security Management Act.
            Similar to dbGaP, the data within DataSTAGE is managed by NHLBI staff and contractors.
            All staff and contractors with access to the data hold a Public Trust Clearance that is based on an extensive background check.
            All activities including data access are logged and monitored.
        </Paragraph>

    </PageContent>
)

export default DataPage

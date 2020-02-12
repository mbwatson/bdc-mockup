import React from 'react'
import { SEO } from '../../components/seo'
import { PageContent } from '../../components/layout'
import { Title, Heading, Paragraph } from '../../components/typography'
import { ExternalButtonLink } from '../../components/buttons'

const ByodPage = () => (
    <PageContent width="95%" maxWidth="1080px" center gutters>
        <SEO
            title="Bring Your Own Data"
            description=""
            keywords=""
        />

        <Title>Bring Your Own Data</Title>
        
        <Paragraph>
            The BioData Catalyst ecosystem exists to make work easier for researchers.
            Sometimes, the best way to do that is to let researchers bring their own data and workflows into the ecosystem to build their analysis further rather than starting over.
            This is why we are actively building the ability to bring your own data into our ecosystem.
        </Paragraph>

        <Heading>Build on your Existing Work</Heading>

        <Paragraph>
            Currently, researchers can bring their own datasets into the BioData Catalyst powered by Seven Bridges and BioData Catalyst powered by Terra.
        </Paragraph>

        <Paragraph>
            As described in the BioData Catalyst Data Use Policy <em>[insert link once we have the policy]</em>, users can upload data for which they have the appropriate approval,
            provided that they do not violate the terms of their Data Use Agreements, Limitations, or Institutional Review Board policies and guidelines.
        </Paragraph>

        <Paragraph center>
            <ExternalButtonLink to="https://f4c.readme.io/docs/upload-to-f4c">BYOD to BioDataCatalyst powered by Seven Bridges</ExternalButtonLink>
        </Paragraph>

        <Paragraph center>
            <ExternalButtonLink to="https://support.terra.bio/hc/en-us/articles/360024056512-Uploading-to-a-workspace-Google-bucket">BYOD to BioDataCatalyst powered by Terra</ExternalButtonLink>
        </Paragraph>

    </PageContent>
)

export default ByodPage

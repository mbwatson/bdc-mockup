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

        <Title>Bring your own data</Title>
        
        <Paragraph>
            To support flexibility and analysis, we allow researchers to bring their own data and workflows into the ecosystem.
            Researchers can bring their own datasets into BioData Catalyst powered by Seven Bridges and BioData Catalyst powered by Terra.
        </Paragraph>
        
        <br/>
        
        <Heading>Build on your existing work</Heading>

        <Paragraph>
            Currently, researchers can bring their own datasets into the BioData Catalyst powered by Seven Bridges and BioData Catalyst powered by Terra.
        </Paragraph>

        <Paragraph>
            As described in the BioData Catalyst Data Use Policy <em>[insert link once we have the policy]</em>, users can upload data for which they have the appropriate approval,
            provided that they do not violate the terms of their Data Use Agreements, Limitations, or Institutional Review Board policies and guidelines.
        </Paragraph>

        <br/>

        <Paragraph center>
            <ExternalButtonLink to="https://f4c.readme.io/docs/upload-to-f4c">BYOD to BioDataCatalyst powered by Seven Bridges</ExternalButtonLink>
        </Paragraph>
        
        <br/>

        <Paragraph center>
            <ExternalButtonLink to="https://support.terra.bio/hc/en-us/articles/360024056512-Uploading-to-a-workspace-Google-bucket">BYOD to BioDataCatalyst powered by Terra</ExternalButtonLink>
        </Paragraph>

    </PageContent>
)

export default ByodPage

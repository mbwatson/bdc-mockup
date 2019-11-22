import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { PageContent } from '../components/layout'
import { MonarchSearch } from '../components/form'
import { Title, Heading, Paragraph } from '../components/typography'
import { LineBreak } from '../components/layout'
import { Container as Grid, Row, Col} from 'react-grid-system'
import { DeleteIcon } from '../components/icons'

const initialState = {
    rows: 10,
    start: 0,
}

const initialResponse = {
    rows: 0,
    start: 0,
    data: [],
}

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [searchOptions, setSearchOptions] = useState(initialState)
    const [results, setResults] = useState(initialResponse)
    const [loading, setLoading] = useState(false)

    const handleChangeQuery = e => setQuery(e.target.value)

    const handleChangeOption = property => e => {
        setSearchOptions({ ...searchOptions, [property]: e.target.value })
    }

    const handleSubmit = e => {
        setLoading(true)
        console.log('Searching...')
        var params = new URLSearchParams()
        params.append('rows', searchOptions.rows)
        params.append('start', searchOptions.start)
        params.append('highlight_class', 'hilite')
        params.append('boost_q', 'category:genotype%5E-10')
        params.append('prefix', 'HP')
        params.append('prefix', 'MONDO')
        params.append('prefix', 'EFO')
        params.append('prefix', 'OBA')
        params.append('prefix', 'NCIT')
        params.append('prefix', '-OMIA')
        const fetchResults = async () => await axios.get(`https://api-dev.monarchinitiative.org/api/search/entity/autocomplete/${ query }`, {
            params: params
        }).then(response => {
                console.log(response.data)
                setResults({
                    rows: +searchOptions.rows,
                    start: +searchOptions.start,
                    data: response.data.docs,
                })
            })
            .catch(error => console.error(error))
        fetchResults()
        setLoading(false)
    }

    return (
        <PageContent width="95%" maxWidth="1080px" center gutters>

            <Title>Search</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ea dolorem natus unde aspernatur, rerum excepturi maiores nobis in iusto adipisci, voluptate quod quas fugit voluptatum. Nostrum maiores dignissimos deleniti.
            </Paragraph>
            
            <Paragraph center>
                <label htmlFor="search-results-rows">Rows</label>
                <input id="search-results-rows" type="number" value={ searchOptions.rows } onChange={ handleChangeOption('rows') }/>

                <label htmlFor="search-results-start">Start</label>
                <input id="search-results-start" type="number" value={ searchOptions.start } onChange={ handleChangeOption('start') }/>
            </Paragraph>

            <MonarchSearch value={ query } onChange={ handleChangeQuery } onSubmit={ handleSubmit } />

            <Grid fluid>
                <Row>
                    <Col xs={ 12 } sm={ 10 }>
                        <Heading>
                            Results &nbsp;
                            { results.data.length > 0 && <span>({ 1 + results.start } - { +results.start + results.data.length })</span> }
                        </Heading>
                    </Col>
                    <Col xs={ 12 } sm={ 2 }>
                        <br/>
                        <button onClick={ () => setResults([]) }><DeleteIcon size={ 32 } fill="var(--color-crimson)" /></button>
                    </Col>
                </Row>
            </Grid>

            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <pre style={{ backgroundColor: '#ccc', overflowX: 'hidden' }}>
                        { JSON.stringify(results.data, null, 2) }
                    </pre>
                )
            }

        </PageContent>
    )
}

export default SearchPage
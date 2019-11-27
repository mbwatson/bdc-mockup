import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from './button'

const transitionBrightness = `
    transition: filter 250ms;
    filter: brightness(1.0);
    &:hover {
        filter: brightness(1.25);
    }
`

export const ButtonLink = styled(Button).attrs({ as: Link })`
    ${ transitionBrightness }
`

export const ExternalButtonLink = styled(ButtonLink).attrs({ as: 'a', target: '_blank', rel: 'noopener noreferrer' })`
    ${ transitionBrightness }
`

export const ButtonCta = styled(ButtonLink)`
    font-weight: bold;
    padding: 1rem 2rem;
    font-size: 120%;
    // transition function inherited from ButtonLink, ...but changing the filter effect to include shadow
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)) brightness(1.0);
    &:hover {
        filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)) brightness(1.25);
    }
`
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const HexagonWrapper = styled.div`
    text-decoration: none;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 2, 0.15));
    margin: 0 -1rem; // squish hexagons together horizontally
    &:nth-child(2n - 1) { // offset every other hexagon vertically
        transform: translateY(55%);
    }
`

export const HexagonInterior = styled.div`
    width: ${ props => props.size ? `${ props.size }px`: '200px' };
    height: ${ props => props.size ? `${ props.size / 1.16 }px`: '173px' };
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    // width: 173px; height: 200px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); // 30 deg rotation
    background-color: ${ props => props.bgColor || '#ecc' };
    color: ${ props => props.fgColor || '#000' };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background-color 500ms, transform 500ms ease-out;
    transform-origin: 50% 50%;
    transform: scale(${ props => props.growOnActive && props.active ? 1.05 : 1 });
    // cursor: pointer;
`

const HexagonText = styled.span`
    text-transform: uppercase;
    margin-top: 1rem;
`

export const Hexagon = ({ size, color, active, growOnActive, path, icon, text, showtext, hoverHandler }) => {
    const Icon = icon

    return (
        <HexagonWrapper to={ path }>
            <HexagonInterior active={ active } growOnActive={ growOnActive }
                size={ size }
                fgColor="#fff"
                bgColor={ active ? 'var(--color-crimson)' : 'var(--color-eggplant)' }
                onMouseOver={ hoverHandler }
            >
                <Icon size={ Math.ceil(size / 3) } fill="#fff" />
                { showtext && <HexagonText>{ text }</HexagonText> }
            </HexagonInterior>
        </HexagonWrapper>
    )
}
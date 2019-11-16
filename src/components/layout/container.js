import styled from 'styled-components'

export const Container = styled.div`
    // border: 1px solid #f99;
    width: ${ props => props.width || '100%' };
    max-width: ${ props => props.maxWidth || '100%' };
    ${ props => props.minWidth ? `max-width: ${ props.minWidth };` : undefined }
    ${ props => props.center ? 'margin: auto;' : undefined }
`

export const BandedContainer = styled(Container)`
    position: relative;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 6rem);
        transform: translateY(3rem);
        background-color: #8997b4;
    }
`

export const BackgroundImageContainer = styled(Container)`
    position: relative;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-eggplant);
        background-image: url(${ props => props.image });
        background-position: center;
        background-size: cover;
        background-blend-mode: multiply;
        filter: brightness(2.5);
        z-index: -1;
        clip-path: polygon(0% 5rem, 50% 8rem, 100% 5rem, 100% 100%, 0% 100%);
    }
`
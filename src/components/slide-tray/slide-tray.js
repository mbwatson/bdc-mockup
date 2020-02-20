import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Tray = styled.div`
    padding-bottom: 1rem;
    width: 100%;
    height: ${ props => props.height || '80px' };
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 2.5rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: scroll;
`

const TrayTitle = styled.header`
    padding: 0.5rem 0;
`

export const SlideTray = ({ title, trayHeight, children }) => {
    const [scrollToRight, setScrollToRight] = useState(true)
    const trayRef = useRef()
    const scrollAmount = 5 // in pixels

    useEffect(() => {
        if (trayRef !== null) {
            const timer = setInterval(() => {
                trayRef.current.scrollTo({
                    top: 0,
                    left: scrollToRight ? trayRef.current.scrollLeft + scrollAmount : trayRef.current.scrollLeft - scrollAmount,
                    behavior: 'smooth'
                })
                if (trayRef.current.scrollLeft <= 0) setScrollToRight(true)
                if (trayRef.current.scrollLeft >= trayRef.current.scrollLeftMax) setScrollToRight(false)
                console.log(scrollToRight ? 'scrolling right' : 'scrolling left')
            }, 100)
            return () => clearInterval(timer)
        }
    }, [scrollToRight])

    return (
        <Wrapper>
            { title &&  <TrayTitle>{ title }</TrayTitle> }
            <Tray height={ trayHeight } ref={ trayRef } className="logo-slider">
                { children }
            </Tray>
        </Wrapper>
    )
}
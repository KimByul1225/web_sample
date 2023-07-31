
import React, {ReactNode, useEffect, useState}from 'react'
import styled from 'styled-components'

export default function Menu({children}: { children: ReactNode}) {
    const [scrollY, setScrollY] = useState(0)
    const modifedScrollY = scrollY > 500 ? scrollY - 370 : 130

    useEffect(() => {
        const scrollEvent = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", scrollEvent)
        return () => window.removeEventListener("scroll", scrollEvent)
    }, [])

    return (
        <Wrap 
            style={{
                top: modifedScrollY + "px",
            }}
        >
            {children}
        </Wrap>
    );
}

const Wrap = styled.ul`
    position: absolute;
    right: -130px;
    width: 100px;
    transition: all .3s ease-in; 
    filter: drop-shadow(0px 4px 14px rgba(180, 178, 178, 0.25));
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 1200px){
        display: none;
    }
`




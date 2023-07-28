import React, { useState, useEffect } from "react";
import styled from "styled-components";
import goTopIcon from "@/resources/icons/commons/icon_gotop_arrow.png";

const GoTopButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div>
                {showTopBtn}
            </div>
            <Button 
                className={showTopBtn ? "on" : ""} 
                onClick={goToTop} 
            >
                <span className="ir_so">스크롤 최상단으로 이동</span>
            </Button>
        </>
    );
};

export default GoTopButton;

const Button = styled.button`
    position: fixed; 
    bottom: 0; 
    right: 50px; 
    display: block; 
    width: 50px; 
    height: 50px; 
    background: #292929 url(${goTopIcon}) center no-repeat; 
    background-size: 24px; 
    transform: rotate(90deg); 
    border-radius: 50px; 
    opacity: 0; 
    transition: all .3s ease; 
    z-index: 999;
    &:hover{opacity: 1; transition: all .3s ease;}
    &.on{right: 50px; bottom: 50px; transition: all .3s ease; opacity: 0.7;}
    @media screen and (max-width: 1200px){
        display: none;
    }
`
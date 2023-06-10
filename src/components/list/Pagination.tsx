import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import lastIcon from "@/resources/icons/commons/icon_pagination_last.png";
import lastIconOn from "@/resources/icons/commons/icon_pagination_last_on.png";

import firstIcon from "@/resources/icons/commons/icon_pagination_first.png";
import firstIconOn from "@/resources/icons/commons/icon_pagination_first_on.png";

import nextIcon from "@/resources/icons/commons/icon_pagination_next.png";
import nextIconOn from "@/resources/icons/commons/icon_pagination_next_on.png";

import prevIcon from "@/resources/icons/commons/icon_pagination_prev.png";
import prevIconOn from "@/resources/icons/commons/icon_pagination_prev_on.png";


interface IPagination{
    total: number;
    limit: number; 
    offset: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ( {total, limit, offset, page, setPage} : IPagination) => {
    const numPages = Math.ceil(total / limit);
    const paginationgArr = new Array(numPages).fill(0); 

    return (
        <>
            <PaginationWrap>
                <FirstButton
                    onClick={() => setPage(1)} disabled={page === 1}
                >
                    <span className="ir_so">맨 앞페이지로 이동</span>
                </FirstButton>
                <PrevButton
                    onClick={() => setPage(page - 1)} disabled={page === 1}
                >
                    <span className="ir_so">이전 페이지로 이동</span>
                </PrevButton>
                <NumberBox>
                    {
                        paginationgArr.map((item, index)=>{
                            return(
                                <button
                                    key={index + 1}
                                    onClick={() => setPage(index + 1)}
                                    className={
                                        index + 1 === page ? "on" : undefined
                                    }
                                >
                                    {index + 1}
                                </button>
                            )
                        })
                    }
                </NumberBox>
                <NextButton
                    onClick={() => setPage(page + 1)} disabled={page === numPages}
                >
                    <span className="ir_so">다음 페이지로 이동</span>
                </NextButton>
                <LastButton
                    onClick={() => setPage(numPages)} disabled={page === numPages}
                >
                    <span className="ir_so">마지막 페이지로 이동</span>
                </LastButton>
            </PaginationWrap>
        </>
    );
};

export default Pagination;



const PaginationWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 60px 0 170px;
    @media screen and (max-width: 1200px){
        margin: 60px 0 80px;
    }
    @media screen and (max-width: 768px){
        margin: 30px 0 50px;
    }
`
const FirstButton = styled.button`
    width: 40px; 
    height: 40px; 
    background: #fff url(${firstIconOn}) center left no-repeat;
    background-size: 20px; 
    margin-right: 10px;
    &:disabled{
        background: #fff url(${firstIcon}) center left no-repeat; 
        cursor: unset;
    }
`
const PrevButton = styled(FirstButton)`
    background: #fff url(${prevIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${prevIcon}) center left no-repeat; 
        cursor: unset;
    }
`

const NextButton = styled(FirstButton)`
    background: #fff url(${nextIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${nextIcon}) center left no-repeat; 
        cursor: unset;
    }
`
const LastButton = styled(FirstButton)`
    background: #fff url(${lastIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${lastIcon}) center left no-repeat; 
        cursor: unset;
    }
`

const NumberBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    button{
        background-color: #fff;
        color: #828282;
        font-size: 16px;
        font-weight: 400;
        height: 40px;
        margin-right: 10px;
        width: 40px;
    }
    button.on{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        border-radius: 4px;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        button {
            font-size: 12px;
            height: 25px;
            width: 25px;
        }
    }
`
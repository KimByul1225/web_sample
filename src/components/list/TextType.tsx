import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Pagination from './Pagination';
import { TextTypeFaker } from '@/resources/faker/list/TextTypeFaker';
import { useSetRecoilState } from 'recoil';
import { alertState } from '@/global/modal';
import RecommendList from './RecommendList';
import BasicSearch from '../commons/search/BasicSearch';
import { RecommendListFaker } from '@/resources/faker/list/RecommendListFaker';


interface IListData{
    index: number;
    title: string;
    date: Date;
}

interface ISearchParams {
    startYmd: Date | null;
    endYmd: Date | null;
    searchType: string;
    searchWord: string;
    currentPageNo: number;
}

const TextType = () => {
    const setAlertModal = useSetRecoilState(alertState);
    const [searchParams, setSearchParams] = useState<ISearchParams>({
        startYmd: null,
        endYmd: null,
        searchType: "both",
        searchWord: "",
        currentPageNo: 1
    });
    const [listData, setListData] = useState<IListData[]>([] as IListData[]);
    const [recommendListData, setRecommendListData] = useState<IListData[]>([] as IListData[]);
    
    // 게시글 목록갯수 설정
    const limit = 10;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const onSubmit = (changedSearchParams: ISearchParams) => {
        setSearchParams({
            ...searchParams,
            ...changedSearchParams
        });
        setAlertModal({
            isShow : true,
            modalProps: {
                message: "검색 기능은 Api 연동이 필요합니다.",
                buttonName: "확인",
            }
        })
    }

    useEffect(() => {
        const result = TextTypeFaker();
        const { resultMap } = result || {};
        const recommendResult = RecommendListFaker();
        const { resultMap: recommendResultMap } = recommendResult || {};
        if (resultMap.result) {
            setListData(resultMap.resultList);
        }
        if (recommendResultMap.result) {
            setRecommendListData(recommendResultMap.resultList);
        }
    }, []);


    return (
        <>
            <SubBanner
                title="게시글 텍스트 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <ListWrap>
                    <Row>
                        <BasicSearch
                            searchParams={searchParams} 
                            onSubmit={onSubmit}
                        />
                        <TotalCount>
                            총 <span>{listData.length}</span>건
                        </TotalCount>
                        <ListTable>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>첨부파일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RecommendList
                                    list = {recommendListData}
                                />
                                {
                                    listData.slice(offset, offset + limit).map((item) => {
                                        const newDate = new Intl.DateTimeFormat('kr').format(item.date);
                                        return(
                                            <tr key={item.index}>
                                                <td>{item.index}</td>
                                                <td className="ellipsis">
                                                    <Link to="/">
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td>{newDate}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </ListTable>
                    </Row>
                </ListWrap>                    
                <Pagination  
                    total={listData.length}
                    limit={limit}
                    page={page}
                    offset={offset}
                    setPage={setPage}
                />
            </Container>
        </>
    );
};

export default TextType;

const ListWrap = styled.div`
    margin: 60px 0;
    @media screen and (max-width: 1200px){
        margin: 40px 0;
    }
`
const TotalCount = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    span{
        color: #ff4d15!important;
    }
    @media screen and (max-width: 1200px){
        margin-bottom: 20px;
    }   
    @media screen and (max-width: 768px){
        font-size: 16px;
        margin-bottom: 15px;
    }   
`
const ListTable = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    thead{
        border-bottom: 1px solid #e0e0e0;
        border-top: 1px solid #828282;
    }
    thead th{
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        height: 60px;
        line-height: 60px;
    }
    thead th:nth-child(1){
        width: 10%;
    }
    thead th:nth-child(2){
        width: 60%;
    }
    thead th:nth-child(3){
        width: 15%;
    }
    thead th:nth-child(4){
        width: 15%;
    }
    tbody tr{
        border-bottom: 1px solid #e0e0e0;
    }
    tbody td{
        color: #333;
        font-size: 18px;
        font-weight: 500;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
    tbody td:nth-child(1){
        width: 10%;
    }
    tbody td:nth-child(2){
        width: 60%;
        text-align: left;
    }
    tbody td:nth-child(3){
        width: 15%;
        color: #828282;
        font-size: 16px;
        font-weight: 400;
    }
    tbody td:nth-child(4){
        width: 15%;
    }
    tbody td a{
        color: #333;
    }
    @media screen and (max-width: 1200px){
        thead th:nth-child(1){
            width: 5%;
        }
        thead th:nth-child(2){
            width: 50%;
        }
        thead th:nth-child(3){
            width: 30%;
        }
        tbody td:nth-child(1){
            width: 5%;
        }
        tbody td:nth-child(2){
            width: 50%;
        }
        tbody td:nth-child(3){
            width: 30%;
            line-height: 20px;
            vertical-align: middle;
        }
    }   

    @media screen and (max-width: 768px){
        thead th{
            font-size: 16px;
            height: 45px;
            line-height: 45px;
        }
        thead th:nth-child(1){
            width: 10%;
        }
        thead th:nth-child(2){
            padding: 0 20px;
            width: 70%;
        }
        thead th:nth-child(3){
            display: none;
        }
        thead th:nth-child(4){
            display: none;
        }
        tbody td:nth-child(1){
            width: 10%;
        }
        tbody td:nth-child(2){
            padding: 0 20px;
            width: 70%;
        }
        tbody td:nth-child(3){
            display: none;
        }
        tbody td:nth-child(4){
            display: none;
        }
    }   

`
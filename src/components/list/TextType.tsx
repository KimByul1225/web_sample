import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Pagination from './Pagination';



import { TextTypeFaker } from '@/resources/faker/list/TextTypeFaker';
import { useSetRecoilState } from 'recoil';



import { alertState, confirmState } from '@/global/modal';


interface Ipagination {
    currentPageNo: number;
    recordCountPerPage: number;
    pageSize: number;
    totalRecordCount: number;
    totalPageCount: number;
    firstPageNoOnPageList: number;
    lastPageNoOnPageList: number;
    firstRecordIndex: number;
    lastRecordIndex: number;
    lastPageNo: number;
    firstPageNo: number;
}
interface IListData{
    index: number;
    title: string;
    date: Date;
}

const TextType = () => {

    const setConfirmModal = useSetRecoilState(confirmState);
    const setAlertModal = useSetRecoilState(alertState)

    const [searchParams, setSearchParams] = useState({
        // startYmd: location.state ? location.state.keyword.startYmd : null,
        // endYmd: location.state ? location.state.keyword.endYmd : null,
        // searchType: location.state ? location.state.keyword.searchType : 'both',
        // searchWord: location.state ? location.state.keyword.searchWord : null,
        // currentPageNo: location.state ? location.state.keyword.currentPageNo : 1,
        // recordCountPerPage: 10
    });

    //const [listData, setListData] = useState<IListData[]>([] as IListData[]);
    // const [paginationInfo, setPaginationInfo] = useState<Ipagination>({} as Ipagination);

    // const onSubmit = (changedSearchParams: any) => {
    //     setSearchParams({
    //         ...searchParams,
    //         ...changedSearchParams
    //     });
    // }


    const [listData, setListData] = useState<IListData[]>([] as IListData[]);
    // 게시글 목록갯수 설정
    const limit = 10;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;



    useEffect(() => {
        const result = TextTypeFaker();
        const { resultMap } = result || {};
        if (resultMap.result) {
            setListData(resultMap.resultList);
        }
    }, []);


    const alertModalHandler = () => {
        setAlertModal({
            isShow : true,
            modalProps: {
                message: "메세지 작성",
                message2: "두번째줄!!!",
                buttonName: "확인",
                handleButton: () => {
                    console.log("No!");
                }
            }
        })
    };

    const confirmModalHandler = () => {
        setConfirmModal({
            isShow : true,
            modalProps: {
                message: "메세지 작성",
                message2: "두번째줄!!!",
                confirmButtonName: "확인",
                cancelButtonName: "취소",
                handleConfirm: () => {
                    console.log("Yes!");
                },
                handleClose: () => {
                    console.log("No!");
                }
            }
        })
    }


    return (
        <>
            <SubBanner
                title="게시글 텍스트 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                    <button
                        onClick={alertModalHandler}
                    >
                        얼럿창 테스트
                    </button>
                    <button
                        onClick={confirmModalHandler}
                    >
                        컨펌창 테스트
                    </button>


                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <ListWrap>
                        <Row>
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
                                    <tr>
                                        <td>추천</td>
                                        <td>51651</td>
                                        <td>ㅁㅁㅁㅁ</td>
                                        <td>ㅃㅃㅃ</td>
                                    </tr>
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

                    



                    <hr />
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
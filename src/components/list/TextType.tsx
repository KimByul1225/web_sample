import React, { useEffect, useState } from 'react';
import SubBanner from '../commons/SubBanner';

import Container from '../layout/Container';
import Row from '../layout/Row';
import Pagination from './Pagination';
import { TextTypeFaker } from '@/resources/faker/list/TextTypeFaker';
import TextList from './TextList';


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



    return (
        <>
            <SubBanner
                title="게시글 텍스트 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <TextList

                    />
                    {
                        listData.slice(offset, offset + limit).map((item) => {
                            return(
                                <div key={item.index}>
                                    {item.index} | {item.title}
                                </div>
                            )
                        })
                    }


                    <hr />
                    <Pagination  
                        total={listData.length}
                        limit={limit}
                        page={page}
                        offset={offset}
                        setPage={setPage}
                    />
                    <hr />

                </Row>
            </Container>
        </>
    );
};

export default TextType;
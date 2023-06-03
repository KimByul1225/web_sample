import React, { useState } from 'react';
import SubBanner from '../commons/SubBanner';

import Container from '../layout/Container';
import Row from '../layout/Row';
import Pagination from './Pagination';

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

const TextType = () => {
    const [searchParams, setSearchParams] = useState({
        // startYmd: location.state ? location.state.keyword.startYmd : null,
        // endYmd: location.state ? location.state.keyword.endYmd : null,
        // searchType: location.state ? location.state.keyword.searchType : 'both',
        // searchWord: location.state ? location.state.keyword.searchWord : null,
        // currentPageNo: location.state ? location.state.keyword.currentPageNo : 1,
        // recordCountPerPage: 10
    });
    const [paginationInfo, setPaginationInfo] = useState<Ipagination>({} as Ipagination);

    const onSubmit = (changedSearchParams: any) => {
        setSearchParams({
            ...searchParams,
            ...changedSearchParams
        });
    }

    return (
        <>
            <SubBanner
                title="게시글 텍스트 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>


                    
                    <Pagination paginationInfo={paginationInfo} onSubmit={onSubmit}></Pagination>

                </Row>
            </Container>
        </>
    );
};

export default TextType;
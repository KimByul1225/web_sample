import React, { useEffect, useState } from 'react';


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

const Pagination = ({ paginationInfo, onSubmit }: {paginationInfo: Ipagination, onSubmit: any}) => {
    const [pagination, setPagination] = useState({ ...paginationInfo });
    const { currentPageNo = 1, lastPageNo = 1, pageSize = 1 } = pagination;

    
    const onClickPage = (pageNo: number) => {
        setPagination({
            ...pagination,
            currentPageNo: pageNo
        });
        onSubmit({ currentPageNo: pageNo });
    }

    useEffect(() => {
        setPagination(paginationInfo);
    }, [paginationInfo])

    return (
        <>
            <div
                // className="pagination_wrap"
                className="pagination_wrap"
            >

                <button
                    className="pagination_first"
                    onClick={() => onClickPage(1)} disabled={currentPageNo === 1}
                >
                    <span className="ir_so">맨 앞페이지로 이동</span>
                </button>
                <button
                    className="pagination_prev"
                    onClick={() => onClickPage(currentPageNo - 1)} disabled={currentPageNo === 1}
                >
                    <span className="ir_so">이전 페이지로 이동</span>
                </button>


                <div
                    className="number_box"
                >
                    {
                        Array((currentPageNo - 1) / pageSize !== (lastPageNo - 1) / pageSize ? pageSize : lastPageNo % pageSize)
                            .map((_, idx) => {
                                if ((idx + (currentPageNo - 1) / pageSize * pageSize + 1) === currentPageNo) {
                                    return (
                                        <button
                                            key={idx + 1}
                                            onClick={() => onClickPage(idx + (currentPageNo - 1) / pageSize * pageSize + 1)}
                                            className="on"
                                        >
                                            {idx + (currentPageNo - 1) / pageSize * pageSize + 1}
                                        </button>
                                    )
                                } else {
                                    return (
                                        <button key={idx + 1} onClick={() => onClickPage(idx + (currentPageNo - 1) / pageSize * pageSize + 1)}>
                                            {idx + (currentPageNo - 1) / pageSize * pageSize + 1}
                                        </button>
                                    )
                                }
                            })
                    }
                </div>



                <button
                    className="pagination_next"
                    onClick={() => onClickPage(currentPageNo + 1)} disabled={currentPageNo === lastPageNo}
                >
                    <span className="ir_so">다음 페이지로 이동</span>
                </button>
                <button
                    className="pagination_last"
                    onClick={() => onClickPage(lastPageNo)} disabled={currentPageNo === lastPageNo}
                >
                    <span className="ir_so">마지막 페이지로 이동</span>
                </button>
            </div>
            {/* pagination_wrap */}
        </>
    );
};

export default Pagination;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IPagination{
    total: number;
    limit: number; 
    offset: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ( {total, limit, offset, page, setPage} : IPagination) => {
    // const [limit, setLimit] = useState(10);
    // const [page, setPage] = useState(1);

    //const offset = (page - 1) * limit;
    const numPages = Math.ceil(total / limit);
    
    const paginationgArr = new Array(numPages).fill(0); 


    return (
        <>
            

            <button
                onClick={() => setPage(1)} disabled={page === 1}
            >
                &lt; &lt;
            </button>
            |
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>
            |
            {
                paginationgArr.map((item, index)=>{
                    return(
                        <Button
                            key={index + 1}
                            onClick={() => setPage(index + 1)}
                            className={
                                index + 1 === page ? "on" : undefined
                            }
                        >
                            {index + 1}
                        </Button>
                    )
                })
            }
            |
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                &gt;
            </button>
            |
            <button onClick={() => setPage(numPages)} disabled={page === numPages}>
                &gt; &gt;
            </button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h2>offset: {offset}</h2>
            <hr />
            <h2>total: {total}</h2>
            <hr />
            <h2>numPages: {numPages}</h2>
            
        </>
    );
};

export default Pagination;

const Button = styled.button`
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    &.on{
        background-color: red;
    }
`
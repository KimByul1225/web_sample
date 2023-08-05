import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


interface IListData{
    index: number;
    title: string;
    date: Date;
}

/**
 * @description 텍스트형태 추천글 리스트를 위한 컴포넌트
 */

const RecommendList = ({list}: {list: IListData[]}) => {
    return (
        <>
            {
                list.map((item) => {
                    const newDate = new Intl.DateTimeFormat('kr').format(item.date);
                    return(
                        <TableRow
                            key={item.index}
                        >
                            <td>
                                <RecommendBox>
                                    추천
                                </RecommendBox>
                            </td>
                            <td className="ellipsis">
                                <Link 
                                    to={`/list/textType/${item.index}`}
                                    state={{
                                        title: item.title,
                                        date: newDate,
                                        recommend: true,
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </td>
                            <td>{newDate}</td>
                            <td></td>
                        </TableRow>
                    )
                })
                
            }
        
        </>

        
    );
};

export default RecommendList;

const TableRow = styled.tr`
    background-color: #fafafa;
`

const RecommendBox = styled.div`
    border: 1px solid var(--col_acc);
    border-radius: 5px;
    color: #ff4d15;
    color: var(--col_acc);
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 50px;
`
import React from 'react';
import styled from 'styled-components';

interface ISubBanner {
    title: string;
    lineText01: string;
    lineText02?: string;
}

/**
 * @description Sub페이지 최상단 배너 영역 컴포넌트
 */

const SubBanner = (props: ISubBanner) => {
    const {title, lineText01, lineText02} = props;
    return (
        <Wrap>
            <div>
                <h2>
                    {title}
                </h2>
                <p>
                    {lineText01}
                </p>
                <p>
                    {lineText02}
                </p>
            </div>
        </Wrap>
    );
};
export default SubBanner;


const Wrap = styled.div`
    background-color: #000; height: 400px; display: flex; flex-direction: column; justify-content: center; padding-bottom: 30px;
    h2{
        color: #fff; font-size: 44px; font-weight: 700; text-align: center; margin-bottom: 10px;
    }
    p{
        color: #969696; font-size: 18px; font-weight: 400; text-align: center; max-width: 1200px; margin: 0 auto; letter-spacing: -0.03em;
    }
    @media screen and (max-width: 1200px){
        padding: 0 20px 20px 20px;
        h2{
            font-size: 40px; font-weight: 700;
        }
    }
    @media screen and (max-width: 768px){
        h2{
            font-size: 22px; margin-bottom: 5px;
        }
        p{
            font-size: 12px;
        }
    }
`


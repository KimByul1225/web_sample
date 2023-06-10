import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale'; //한국어 설정


import moment from "moment";

import iconDate from "@/resources/icons/commons/icon_date.png"
import iconReset from "@/resources/icons/commons/icon_btn_reset.png"


const BasicSearch = ({searchParams, onSubmit, datepicker}: {searchParams: any, onSubmit: any, datepicker?: boolean}) => {

    const [params, setParams] = useState(searchParams);

    useEffect(() => {
        setParams({
            ...searchParams,
            currentPageNo : 1
        });
    }, [searchParams]);


    useEffect(() => {
        if(params.startYmd && params.endYmd){
            let startMoment = moment(params.startYmd, 'YYYYMMDD');
            let endMoment = moment(params.endYmd, 'YYYYMMDD');
            if(!endMoment.isAfter(startMoment) && !endMoment.isSame(startMoment)){
                // dispatch(showAlertModal('시작일자 이후로 종료일자를 선택해주세요', '', '확인'));
                params.endYmd = '';
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.startYmd, params.endYmd]);


    const onChange = (e: any) => {
        const { name, value } = e.target;
        setParams({
            ...params,
            [name] : value
        });
    }

    const onChangeDate = (date: Date | null, name: string) => {
        if(moment(date).isValid()){
            setParams({
                ...params,
                [name]: moment(date).format('YYYYMMDD')
            })
        } else {
            setParams({
                ...params,
                [name]: null
            })
        }
    }

    const reset = () => {
        setParams({
            ...params,
            startYmd: null,
            endYmd: null,
        });
    }


    return (
        <Wrap>
            <LineBox>
                <LabelWrap>
                    <label htmlFor="">조회기간</label>
                </LabelWrap>
                <DateWrap>
                    <DatePicker
                        locale={ko}
                        dateFormat="yyyy-MM-dd"
                        selected={params.startYmd && moment(params.startYmd).toDate()}
                        onChange={(date) => onChangeDate(date, 'startYmd')}
                    />
                    <span>~</span>
                    <DatePicker
                        locale={ko}
                        dateFormat="yyyy-MM-dd"
                        selected={params.endYmd && moment(params.endYmd).toDate()}
                        onChange={date => onChangeDate(date, 'endYmd')}
                    />
                </DateWrap>
                    <ResetButton
                        onClick={reset}
                    >
                        <span className="ir_so">초기화 버튼</span>
                    </ResetButton>
            </LineBox>

            <LineBox>
                <LabelWrap>
                    <label htmlFor="">검색어</label>
                </LabelWrap>

            </LineBox>
        </Wrap>
    );
};

export default BasicSearch;


const Wrap = styled.div`
    background-color: #f8f8f8;
    padding: 30px;
    margin-bottom: 60px;
    @media screen and (max-width: 1200px){
        margin-bottom: 40px;
    }
    @media screen and (max-width: 768px){
        padding: 30px 20px;
    }
`

const LineBox = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    :last-child{
        margin-bottom: 0;
    }
    @media screen and (max-width: 768px){
        display: block;
        margin-bottom: 20px;
    }
`
const LabelWrap = styled.div`
    height: 50px;
    line-height: 50px;
    width: 140px;
    label{
        color: #313131;
        font-size: 18px;
        font-weight: 600;
    }
    @media screen and (max-width: 768px){
        height: auto;
        line-height: 1.3;
        margin-bottom: 10px;
        text-align: center;
        width: 100%;
        label{
            font-size: 16px;
            font-weight: 600;
        }
    }
`

const DateWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-right: 10px;
    .react-datepicker-wrapper{
        border: 0;
        display: inline-block;
        padding: 0;
        width: 160px;
        height: 50px;
    }
    .react-datepicker__input-container {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 100%;
    }
    input{
        background: #fff url(${iconDate}) center right 12px no-repeat;
        background-size: 24px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        color: #828282;
        font-size: 16px;
        height: 100%;
        padding-left: 15px;
        width: 100%;
    }
    span {
        color: #000;
        display: inline-block;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 30px;
    }
    
    

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-right: 0;
        .react-datepicker-wrapper{
            width: 100%;
        }
        span{
            height: 30px;
            line-height: 30px;
        }
    }

`

const ResetButton = styled.button`
    background: #fff url(${iconReset}) center no-repeat;
    background-size: 30px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    height: 50px;
    width: 50px;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
        width: 100%;
    }
`
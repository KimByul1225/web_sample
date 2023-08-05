import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import moment from "moment";
import iconDate from "@/resources/icons/commons/icon_date.png"
import iconReset from "@/resources/icons/commons/icon_btn_reset.png"
import iconSelect from "@/resources/icons/commons/icon_select.png"
import { useSetRecoilState } from 'recoil';
import { alertState } from '@/global/modal';
import { enterKeyPressHandler } from '@/modules/commons';

interface ISearchParams {
    startYmd: Date | null;
    endYmd: Date | null;
    searchType: string;
    searchWord: string;
    currentPageNo: number;
}

/**
 * @description 기본검색창 컴포넌트
 */

const BasicSearch = ({searchParams, onSubmit, datepicker}: {searchParams: ISearchParams, onSubmit: (changedSearchParams: ISearchParams) => void, datepicker?: boolean}) => {
    const [params, setParams] = useState<ISearchParams>(searchParams);
    const setAlertModal = useSetRecoilState(alertState);
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
                setAlertModal({
                    isShow : true,
                    modalProps: {
                        message: "시작일자 이후로 종료일자를 선택해주세요",
                        buttonName: "확인",
                    }
                })
                setParams({
                    ...params,
                    endYmd: null
                })
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
            {
                datepicker !== false && 
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
            }

            <LineBox>
                <LabelWrap>
                    <label htmlFor="">검색어</label>
                </LabelWrap>
                <InputWrap>
                    <select  name="searchType" defaultValue={params.searchType || 'both'} onChange={onChange}>
                        <option value="both">제목 + 내용</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                    </select>
                    <input 
                        type="text" 
                        id="searchWord"
                        name="searchWord" 
                        onChange={onChange} 
                        placeholder="검색어를 입력하세요."
                        value={params.searchWord || ''}
                        onKeyPress={(e) => enterKeyPressHandler(e, () => onSubmit(params))}
                    />
                    <button
                        onClick={() => onSubmit(params)}
                    >
                        검색
                    </button>
                </InputWrap>

            </LineBox>
        </Wrap>
    );
};

export default BasicSearch;


const Wrap = styled.div`
    background-color: #f8f8f8;
    padding: 30px;
    
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

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% - 140px);
    select{
        -webkit-appearance: none;
        appearance: none;
        width: 160px; 
        height: 50px; 
        border: 1px solid #E0E0E0; 
        border-radius:4px; 
        padding-left: 15px; 
        font-size: 16px;  
        color: #828282; 
        background: #fff url(${iconSelect}) center right 15px no-repeat; background-size: 18px; margin-right: 10px;
    }
    input{
        width: calc(100% - 280px);
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        color: #828282;
        font-size: 16px;
        height: 50px;
        margin-right: 10px;
        padding-left: 15px;
    }
    button{
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
        height: 50px;
        transition: all .3s ease;
        width: 100px;
    }
    button:hover{
        background-color: #fff;
        color: #ff4d15;
        color: var(--col_acc);
        transition: all .3s ease;
    }

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        select{
            width: 100%;
        }
        input{
            margin-top: 10px;
            width: 100%;
        }
        button{
            margin-top: 20px;
            width: 100%;
        }
        button:hover{
            background-color: var(--col_acc);
            border: 1px solid var(--col_acc);
            color: #fff;
        }
    }
`
import React, { useState } from "react";
import Agreement from "./Agreement";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/global/modal";
import Join from "./Join";



const Register = () => {
    const [checkBox, setCheckBox] = useState({
        check1: false,
        check2: false
    });
    const [agreement, setAgreement] = useState<boolean>(false);

    const setAlertModal = useSetRecoilState(alertState);
    const checkHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setCheckBox({...checkBox, [name]: checked});
    }

    const nextButtonHandler = () => {

        if(checkBox.check1 && checkBox.check2){
            setAgreement(true);
        }else if(checkBox.check1  && !checkBox.check2 ){
            setAlertModal({
                isShow : true,
                modalProps: {
                    message: "개인정보처리방침 동의해주세요.",
                    buttonName: "확인",
                }
            })
        }else if(checkBox.check2 && !checkBox.check1){
            setAlertModal({
                isShow : true,
                modalProps: {
                    message: "이용약관을 동의해주세요.",
                    buttonName: "확인",
                }
            })
        }else {
            setAlertModal({
                isShow : true,
                modalProps: {
                    message: "개인정보 처리방침과 이용약관을 동의해주세요.",
                    buttonName: "확인",
                }
            })
        }
    };

    return (
        <>
            {
                agreement ? 
                    <Join/>
                :
                    <Agreement
                        checkHandler={checkHandler}
                        checkValue={checkBox}
                        nextButton={nextButtonHandler}
                    />
            }
            
        </>
    )
}

export default Register

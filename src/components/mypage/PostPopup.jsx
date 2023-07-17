import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import closeIcon from "@/resources/icons/commons/icon_modal_close.png";

const PostPopup = (props) => {
    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        props.setcompany({
            ...props.cmpnyAddress,
            address:fullAddress,
            zonecode: data.zonecode
        })
    }
    const onClose = () => {
        props.postClose()
    }


    return (
        <Wrap>
            <Box>
                <CloseButton
                    type="button"
                    onClick={props.postClose}
                >
                    <span className="ir_so">
                        닫기 버튼
                    </span>
                </CloseButton>
                <DaumPostcode
                    className="post_pop"
                    style={{height:"100%"}}
                    autoClose
                    onComplete={complete}
                    onClose={onClose}
                />
            </Box>
        </Wrap>
    );
};

export default PostPopup;


const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Box = styled.div`
    width: 500px;
    height: 520px;
    padding: 50px 20px 20px 20px;
    background-color: #fff;
    position: relative;
    border-radius: 20px;
    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`
const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    background: url(${closeIcon}) center no-repeat;
    background-size: contain;
    position: absolute;
    top: 10px;
    right: 20px;
`
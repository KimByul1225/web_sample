/**
 * 검색 input 창에서 enter 클릭 시 submit 하는 핸들러 함수
 * @param e
 * @param onSubmitHandler
 */

export const enterKeyPressHandler = (e, onSubmitHandler) => {
    if (e.key === 'Enter') {
        onSubmitHandler();
    }
}
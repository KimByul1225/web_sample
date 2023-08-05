import React from 'react';
import { Outlet } from 'react-router';

/**
 * @description 마이페이지 Container (path: "mypage")
 */

const Mypage = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default Mypage
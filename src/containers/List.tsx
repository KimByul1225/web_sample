import React from 'react';
import { Outlet } from 'react-router';

/**
 * @description 게시글 Container (path: "list")
 */

const List = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default List;
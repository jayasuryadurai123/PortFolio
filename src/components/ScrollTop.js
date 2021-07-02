import React from 'react';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () =>{
    const loaction = useLocation();
    useEffect(()=>{
        window.scroll({
            top:0
        })
    },[loaction.pathname])
    return null;
}
export default ScrollTop;
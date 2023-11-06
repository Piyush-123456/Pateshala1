"use client";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
// import { asyncallinternships, asyncalljobs } from '@/store/actions/employeActions';

const employeAuth = ({ children }) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.employeReducer)
    console.log(isAuthenticated)
    useEffect(() => {
        if (!isAuthenticated) router.push("/employe");
        // if(isAuthenticated){
        //     dispatch(asyncalljobs())
        //     dispatch(asyncallinternships())
        // }
    }, [isAuthenticated])
    return (
         children 
    )
}

export default employeAuth
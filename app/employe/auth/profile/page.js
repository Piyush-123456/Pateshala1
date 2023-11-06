"use client";
import { asyncavataremploye, asyncresetpasswordemploye, asyncsignupemploye, asyncupdateemploye } from '@/store/actions/employeActions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const { employe } = useSelector(state => state.employeReducer)
    console.log(employe)
    const employeUpdateHandler = () => {
        const newemploye = {
            firstname: 'master',
            lastname: 'dhanesh',

        }
        dispatch(asyncupdateemploye(newemploye))
    }
    const AvatarHandler = (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        formdata.set("organzationlogo", e.target.organzationlogo.files[0]);
        dispatch(asyncavataremploye(formdata))

    }
    const ResetPasswordHandler = ()=>{
        const pwd = {
            password : '12345678'
        }
        dispatch(asyncresetpasswordemploye(pwd))

    }
    return (
        <div className='container'>
            <img height={200} src={employe&&employe.organzationlogo.url} alt="" />
            <form onSubmit={AvatarHandler} encType="multipart/form-data">
                <input type="file" name="organzationlogo"/>
                <button>Submit</button>
            </form>
            <button onClick={employeUpdateHandler} className='btn btn-warning'>Update employe</button>
            <button onClick={ResetPasswordHandler} className='btn btn-danger'>Reset employe Password</button>


        </div>
    )
}

export default page
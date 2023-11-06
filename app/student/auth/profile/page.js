"use client";
import { asyncavatarstudent, asyncresetpasswordstudent, asyncsignupstudent, asyncupdatestudent } from '@/store/actions/studentActions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state.studentReducer)
    console.log(student)
    const StudentUpdateHandler = () => {
        const newStudent = {
            firstname: 'master',
            lastname: 'dhanesh',

        }
        dispatch(asyncupdatestudent(newStudent))
    }
    const AvatarHandler = (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        formdata.set("avatar", e.target.avatar.files[0]);
        dispatch(asyncavatarstudent(formdata))

    }
    const ResetPasswordHandler = ()=>{
        const pwd = {
            password : '12345678'
        }
        dispatch(asyncresetpasswordstudent(pwd))

    }
    return (
        <div className='container'>
            <img height={200} src={student&&student.avatar.url} alt="" />
            <form onSubmit={AvatarHandler} encType="multipart/form-data">
                <input type="file" name="avatar"/>
                <button>Submit</button>
            </form>
            <button onClick={StudentUpdateHandler} className='btn btn-warning'>Update Student</button>
            <button onClick={ResetPasswordHandler} className='btn btn-danger'>Reset Student Password</button>


        </div>
    )
}

export default page
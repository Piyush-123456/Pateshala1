"use client";
import { asyncaddjobstudent } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const edu = {
     Title :"MBA Recruiter"
    }
     dispatch(asyncaddjobstudent(edu));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Job </button>        
        </div>
  )
}

export default page
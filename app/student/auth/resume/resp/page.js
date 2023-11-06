"use client";
import { asyncaddrespstudent } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const edu = {
      Title:"E-Cell"
    }
     dispatch(asyncaddrespstudent(edu));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Resp </button>        
        </div>
  )
}

export default page
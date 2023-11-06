"use client";
import { asyncaddinternshipstudent } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const it = {
       Title : "Frontend Developer"
    }
     dispatch(asyncaddinternshipstudent(it));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Internship </button>        
        </div>
  )
}

export default page
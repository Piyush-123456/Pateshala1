"use client";
import { asyncaddprojectstudent } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const edu = {
        Title:"new project added"
    }
     dispatch(asyncaddprojectstudent(edu));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Project </button>        
        </div>
  )
}

export default page
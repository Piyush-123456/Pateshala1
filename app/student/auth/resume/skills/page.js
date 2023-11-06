"use client";
import { asyncaddskill } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const edu = {
        Title:"new skills are added"
    }
     dispatch(asyncaddskill(edu));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Skill </button>        
        </div>
  )
}

export default page
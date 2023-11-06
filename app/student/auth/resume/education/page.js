"use client";
import { asyncaddeducationstudent } from '@/store/actions/studentActions';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = ()=>{
    const edu = {
        status:"Pass",
        year: "2018",
        board : "MP Board",
        performance : "80",
        school :"ST. Joseph",
        degree :"phd"
    }
     dispatch(asyncaddeducationstudent(edu));
  }
  return (
    <div className='container mt-5'>
    <button onClick={AddEduHandler} className='btn btn-primary'> Add Education </button>        
        </div>
  )
}

export default page
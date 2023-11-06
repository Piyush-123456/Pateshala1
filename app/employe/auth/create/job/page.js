"use client";
import { asynccreatejobemploye } from '@/store/actions/employeActions';
import React from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    const CreateJobHandler = () => {
        const job = {
            title: "Data Scientist",
            skill: "Python Nympy Pandas",
            jobtype: "Remote",
            openings: 12,
            description: "very good job",
            preference: "Python wala chahaiye",
            salary: 12000,
            perks: "Rat ka khana",
            assesments: "Why do you want to join this job?"
        }
        dispatch(asynccreatejobemploye(job))
    }
    return (
        <div className='container mt-5'>
            <button onClick={CreateJobHandler} className="btn btn-primary">Create Job</button>
        </div>
    )
}

export default page
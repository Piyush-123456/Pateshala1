"use client";
import { asynccreateinternshipemploye } from '@/store/actions/employeActions';
import React from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    const CreateInternshipHandler = () => {
        const internship = {
            profile: "AI Software Engineer",
            skill: "Artificial Intelligence",
            internshiptype:"Remote",
            openings: 10,
            from: "5 oct 2023",
            to: "20 Nov 2023",
            duration: "3 Months",
            responsibility: "km acche hona chahiye",
            stipend: {
                status: "Fixed",
                amount : 100000,
            },
            perks : "Subah ka khana ",
            assesments : "Why do you want this job ? ",
        }
        dispatch(asynccreateinternshipemploye(internship))
    }
    return (
        <div className='container mt-5'>
            <button onClick={CreateInternshipHandler} className="btn btn-danger">Create Internship</button>
        </div>
    )
}

export default page
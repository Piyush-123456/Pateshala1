"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import css from '@/app/student/auth/auth.module.css'

const page = () => {
    const { student } = useSelector((state) => state.studentReducer);

    return (
        <div>
            <div className='container mt-5'>
                <ul className='list-group'>
                    <h1>
                        Available jobs and interships for
                        <strong>{student && student.firstname}</strong>
                    </h1>
                    <ul className='list-group'>
                        {student && student.jobs.map((j) => (<div className='list-group-item mb-3' key={j._id}>
                            <div className={css.title}>
                                <h1 style={{ fontSize: '15px', marginBottom: '10px' }}>
                                    Job Title : {j.title}
                                </h1>
                                <h2 style={{ fontSize: '15px' }}>Skill : {j.skill}</h2>
                                <h2 style={{ fontSize: '15px' }}>Openings : {j.openings}</h2>
                                <h2 style={{ fontSize: '15px' }}>
                                    Description : {j.description}
                                </h2>
                                <h2 style={{ fontSize: '15px' }}>Salary : {j.salary}</h2>
                            </div>
                            <div class="circle"></div> <br />
                        </div>))}
                    </ul>

                    <hr />

                </ul>
                <h1></h1>
                <ul className='list-group'>
                    {student && student.internships.map((i) => (<div className='list-group-item mb-3' key={i._id}>
                        <div className={css.title}>
                            <h1 style={{ fontSize: "15px" }}>Profile : {i.profile}</h1>
                            <h3 style={{ fontSize: "15px" }}>Skill : {i.skill}</h3>
                            <h3 style={{ fontSize: "15px" }}>InternshipType : {i.internshiptype}</h3>
                            <h3 style={{ fontSize: "15px" }}>Start Date : {i.from}</h3>
                            <h3 style={{ fontSize: "15px" }}>End Date : {i.to}</h3>
                            <h3 style={{ fontSize: "15px" }}>Responsibility : {i.responsibility}</h3>
                            <h3 style={{ fontSize: "15px" }}>Perks : {i.perks}</h3>

                        </div>
                        <div class="circle"></div> <br />
                    </div>))}
                </ul>
            </div>
        </div>
    )
}

export default page
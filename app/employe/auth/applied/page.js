"use client";
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const { employe } = useSelector((state) => state.employeReducer);

    return (
        <div>
            <div className='container mt-5'>
                <ul className='list-group'>
                    <h1>
                        Available jobs and interships by
                        <strong>{employe && employe.firstname}</strong>
                    </h1>
                    <ul className='list-group'>
                        {employe && employe.jobs.map((j) => (<div className='list-group-item mb-3' key={j._id}>
                            {JSON.stringify(j)} <br />
                        </div>))}
                    </ul>

                    <hr />

                    <ul className='list-group'>
                        {employe && employe.internships.map((i) => (<div className='list-group-item mb-3' key={i._id}>
                            {JSON.stringify(i)} <br />
                        </div>))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default page
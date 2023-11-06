"use client"
import { asynceditedustudent } from '@/store/actions/studentActions'
import React from 'react'
import { useDispatch } from 'react-redux'

const page = ({ params }) => {
    console.log(params)
    const dispatch = useDispatch();
    const EditEduHandler = () => {
        const edu = {
            school: "Oriental School"
        }
        dispatch(asynceditedustudent(params.id, edu))
    }
    return (
        <div className='container mt-5'>
            <button onClick={EditEduHandler} className='btn btn-danger'>
                Edit Education
            </button>
        </div>
    )
}

export default page
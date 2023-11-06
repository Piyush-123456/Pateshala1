"use client"
import { asynceditprojectstudent } from '@/store/actions/studentActions'
import React from 'react'
import { useDispatch } from 'react-redux'

const page = ({ params }) => {
    console.log(params)
    const dispatch = useDispatch();
    const EditEduHandler = () => {
        const job = {
            Title: "Unacademy"
        }
        dispatch(asynceditprojectstudent(params.id, job))
    }
    return (
        <div className='container mt-5'>
            <button onClick={EditEduHandler} className='btn btn-danger'>
                Edit Projects
            </button>
        </div>
    )
}

export default page
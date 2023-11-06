"use client"
import { asynceditrespstudent } from '@/store/actions/studentActions'
import React from 'react'
import { useDispatch } from 'react-redux'

const page = ({ params }) => {
    console.log(params)
    const dispatch = useDispatch();
    const EditEduHandler = () => {
        const edu = {
            Title: "Oriental School"
        }
        dispatch(asynceditrespstudent(params.id, edu))
    }
    return (
        <div className='container mt-5'>
            <button onClick={EditEduHandler} className='btn btn-danger'>
                Edit Resp
            </button>
        </div>
    )
}

export default page
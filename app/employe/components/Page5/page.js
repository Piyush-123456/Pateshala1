"use client";
import React from 'react'
import css from './page.module.css'

const page = () => {
    return (
        <>
            <div className={css.page5}>

                <div className={css.left}>

                    <h3>
                        Get Job and internship recommendation after the 
                        completion of your course.
                    </h3>

                    <p>
                        Get personalized job and internship recommendation
                        after the course completion and get the practical
                        hand on experience to unlock the power of applied
                        learning.
                    </p>

                </div>

                <div className={css.right}>

                    <img src="IMG/img3.png" alt="" />

                </div>
                
            </div>
        </>
    )
}

export default page
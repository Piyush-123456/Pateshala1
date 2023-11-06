"use client";
import { asyncdeleteedustudent, asyncdeleteinternpro, asyncdeleteinternresp, asyncdeleteinternskill, asyncdeleteinternstudent, asyncdeletejobstudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state.studentReducer);
    
    const DeleteHandlerstudent = (id)=>{
        dispatch(asyncdeleteedustudent(id))
    }
    const DeleteHandlerjob = (id)=>{
        dispatch(asyncdeletejobstudent(id))
    }
    const DeleteHandlerintern = (id)=>{
        dispatch(asyncdeleteinternstudent(id))
    }
    const DeleteHandlerresp = (id)=>{
        dispatch(asyncdeleteinternresp(id))
    }
    
    const DeleteHandlerpro = (id)=>{
        dispatch(asyncdeleteinternpro(id))
    }

    
    const DeleteHandlerskill = (id)=>{
        dispatch(asyncdeleteinternskill(id))
    }


    return (
        <div className='container mt-5'>
            <h1>This is Your Resume Section</h1>
            <h4>Education : <Link href="/student/auth/resume/education">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.education.map((e) => (
                    <div key={e.id} className='list-group-item'>
                        {/* {JSON.stringify(e)} */}
                        <h3 style={{fontSize:"15px"}}>Status : {e.status}</h3>
                        <h3 style={{fontSize:"15px"}}>Year : {e.year}</h3>
                        <h3 style={{fontSize:"15px"}}>Board : {e.board}</h3>
                        <h3 style={{fontSize:"15px"}}>Performance : {e.performance}</h3>
                        <h3 style={{fontSize:"15px",marginBottom:"-15px"}}>School : {e.school}</h3>
                        <br/>
                        <Link href={`/student/auth/resume/education/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerstudent(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}

            </ul>
            <h4>Jobs : <Link href="/student/auth/resume/jobs">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.jobs.map((e) => (
                    <div key={e.id} className='list-group-item'>
                        <h3 style={{fontSize:"15px",marginBottom:"-20px"}}>Title : {e.Title}</h3>
                        <br/>
                        <Link href={`/student/auth/resume/jobs/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerjob(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}
                
            </ul>
            <h4>Internships : <Link href="/student/auth/resume/internships">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.internships.map((e) => (
                    <div key={e.id} className='list-group-item'>
                                               <h3 style={{fontSize:"15px",marginBottom:"-20px"}}>Title : {e.Title}</h3>

                        <br/>
                        <Link href={`/student/auth/resume/internships/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerintern(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}
                
            </ul>
            <h4>Responsibility : <Link href="/student/auth/resume/resp">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.responsibilites.map((e) => (
                    <div key={e.id} className='list-group-item'>
                     <h3 style={{fontSize:"15px",marginBottom:"-20px"}}>Title : {e.Title}</h3>

                        <br/>
                        <Link href={`/student/auth/resume/resp/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerresp(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}
                
            </ul>
            <h4>Projects : <Link href="/student/auth/resume/project">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.projects.map((e) => (
                    <div key={e.id} className='list-group-item'>
                                             <h3 style={{fontSize:"15px",marginBottom:"-20px"}}>Title : {e.Title}</h3>

                        <br/>
                        <Link href={`/student/auth/resume/project/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerpro(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}
                
            </ul>
            <h4>Skills : <Link href="/student/auth/resume/skills">+</Link> </h4>
            <ul className='list-group'>
                {student && student.resume.skills.map((e) => (
                    <div key={e.id} className='list-group-item'>
                        {JSON.stringify(e)}
                      
                        <br/>
                        <Link href={`/student/auth/resume/skills/${e.id}`}>Edit</Link>
                        <br/>
                        <button onClick={()=>DeleteHandlerskill(e.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </div>)
                )}
                
            </ul>
        </div>
    )
}
export default page
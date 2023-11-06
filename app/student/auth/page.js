"use client"; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from '@/store/actions/studentActions';
import css from './auth.module.css';

const Page = () => {
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };

  useEffect(() => {}, [student]);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px 40px',
    width: '95vw',
    overflowX: 'hidden',
    margin: 'auto',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    position: 'relative',
    left: '35%',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const alreadyAppliedStyle = {
    fontSize: '1rem',
    color: '#28a745',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Available Jobs for <strong>{student && student.firstname}</strong>
      </h1>
      <div style={gridContainerStyle} className={css.contain}>
        {jobs &&
          jobs.map((j) => (
            <div key={j._id} className={css.card}>
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
              <div class="circle"></div>
              {!j.students.includes(student && student._id) ? (
                <button
                  style={buttonStyle}
                  onClick={() => ApplyJobHandler(j._id)}
                >
                  Apply Job
                </button>
              ) : (
                <p style={alreadyAppliedStyle}>Already applied</p>
              )}
            </div>
          ))}
      </div>

      <hr />

      <h1 style={headingStyle}>
        Available internships for <strong>{student && student.firstname}</strong>
      </h1>
      <div style={gridContainerStyle} className={css.contain}>
        {internships &&
          internships.map((i) => (
            <div key={i._id} className={css.card}>
              <div className={css.title}>
                <h1 style={{fontSize:"15px"}}>Profile : {i.profile}</h1>
                <h3 style={{fontSize:"15px"}}>Skill : {i.skill}</h3>
                <h3 style={{fontSize:"15px"}}>InternshipType : {i.internshiptype}</h3>
                <h3 style={{fontSize:"15px"}}>Start Date : {i.from}</h3>
                <h3 style={{fontSize:"15px"}}>End Date : {i.to}</h3>
                <h3 style={{fontSize:"15px"}}>Responsibility : {i.responsibility}</h3>
                <h3 style={{fontSize:"15px"}}>Perks : {i.perks}</h3>
                





              </div>
              <div class="circle"></div>
              {!i.students.includes(student && student._id) ? (
                <button
                  style={buttonStyle}
                  onClick={() => ApplyInternshipHandler(i._id)}
                >
                  Apply Internship
                </button>
              ) : (
                <p style={alreadyAppliedStyle}>Already applied</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;

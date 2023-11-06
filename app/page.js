"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import {asynccurrentstudent} from "@/store/actions/studentActions"
import { useDispatch } from 'react-redux'

const Page = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const leftSideStyle = {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
  };

  const rightSideStyle = {
    flex: 1,
    // backgroundColor: '#007BFF',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    height:"100vh",
    width:"50vw",
    backgroundImage:'url("https://images.unsplash.com/photo-1606636660801-c61b8e97a1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")',
    backgroundRepeat: "norepeat"

  };

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={leftSideStyle}>
        <h1>Welcome to Pathshala</h1>
        <h5>We help people to choose right company at right time</h5>
        <p>Lets get connect with us</p>
        <div>
          <Link href="/student" passHref>
            <div style={linkStyle}>Student</div>
          </Link>
          <Link href="/employe" passHref>
            <div style={linkStyle}>Employee</div>
          </Link>
        </div>
      </div>
      <div style={rightSideStyle}>
        
      </div>
    </div>
  );
};

export default Page;

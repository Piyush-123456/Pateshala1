"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import Page3 from './components/Page3/page'
import Page4 from './components/Page4/page'
import Page5 from './components/Page5/page'
import Page6 from './components/Page6/page'
import Page7 from './components/Page7/page'

const Page = () => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer)
  console.log(isAuthenticated)
  
  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated])

  const heroSectionStyle = {
    background: 'url("https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
    backgroundSize: 'cover',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
    position: 'relative', // Add this to make the overlay work
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  };

  const contentStyle = {
    zIndex: 1, // Ensure content is on top of the overlay
  };

  const buttonStyle = {
    textDecoration: 'none',
    fontSize: '1.2rem',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
  };

  const handleSignInClick = () => {
    router.push("/student/signin");
  }

  const handleSignUpClick = () => {
    router.push("/student/signup");
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={heroSectionStyle}>
        {/* Overlay */}
        <div style={overlayStyle}></div>
        
        {/* Content */}
        <div style={contentStyle}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Welcome to Pathshala</h1>
          <p style={{ fontSize: '1.2rem',fontFamily:"gilroy" }}>Get your desired Job and Internship</p>
        </div>
      </div>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      {/* <Page7/> */}
    </div>
  )
}

export default Page

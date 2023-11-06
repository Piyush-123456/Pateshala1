"use client";
import { asynccurrentstudent, asyncsignoutstudent } from '@/store/actions/studentActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { isAuthenticated } = useSelector((state) => state.studentReducer)

  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated])

  const singouthandler = () => {
    dispatch(asyncsignoutstudent())
  }

  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: '#333',
    color: '#fff',
    padding: '10px',
    paddingLeft: '25px',
    paddingRight:'45px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    outline: "none",
    marginRight: '15px', // Adjust the margin as needed
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: "gilroy",
  };

  const logoStyle = {
    fontSize: "25px",
    fontFamily: "cursive",
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div>
          <h1 style={logoStyle}>Pathshala</h1>
        </div>
        <Link href={isAuthenticated ? "/student/auth" : "/student"} passHref>
          <div style={linkStyle}>Home</div>
        </Link>
        {/* Logo */}
        
        {isAuthenticated ? (
          <>
            <Link href="/student/auth/profile" passHref>
              <div style={linkStyle}>Profile</div>
            </Link>
            <Link href="/student/auth/applied" passHref>
              <div style={linkStyle}>My Applications</div>
            </Link>
            <div onClick={singouthandler} style={{ ...linkStyle, cursor: 'pointer' }}>Signout</div>
            <Link href="/student/auth/resume" passHref>
              <div style={linkStyle}>Your Resume</div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/student/signup" passHref>
              <div style={linkStyle}>Signup</div>
            </Link>
            <Link href="/student/signin" passHref>
              <div style={linkStyle}>Signin</div>
            </Link>
          </>
        )}
      </nav>
      {children}
    </>
  );
}

export default StudentLayout;

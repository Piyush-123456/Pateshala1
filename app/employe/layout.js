"use client";
import { asynccurrentemploye, asyncsignoutemploye } from '@/store/actions/employeActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const singouthandler = () => {
    dispatch(asyncsignoutemploye());
  };

  const navbarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer',
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div>
          <Link href={isAuthenticated ? "/employe/auth" : "/employe"} passHref>
            <span style={linkStyle}>Home</span>
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <Link href="/employe/auth/profile" passHref>
                <span style={linkStyle}>Profile</span>
              </Link>
              <Link href="/employe/auth/applied" passHref>
                <span style={linkStyle}>My Applications</span>
              </Link>
              <span onClick={singouthandler} style={linkStyle}>Signout</span>
            </>
          ) : (
            <>
              <Link href="/employe/signup" passHref>
                <span style={linkStyle}>Signup</span>
              </Link>
              <Link href="/employe/signin" passHref>
                <span style={linkStyle}>Signin</span>
              </Link>
            </>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}

export default employeLayout;

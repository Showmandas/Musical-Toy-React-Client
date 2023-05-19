import React, { useEffect } from 'react'

export default function Blog() {
   //add dynamic title
  useEffect(()=>{
    document.title="Musical Toy | Blog"
      },[]);
  return (
    <div className='container my-5'>
    <div className="card p-4 mb-4">
        <p className='fs-4 fw-medium'>Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
        <p>
        Ans: Access token is a secure string that a client uses to protect resources.
        Refresh token is a string that client can use to get a new access token without user's interaction.
        A client get access token as a credential when they are authenticate and authorize and it's for short time.But refresh token is special for getting access token and it's long term token.We can store these tokens in localStorage and httpOnly but these are not secure place.But between two httpOnly cookies is little bit secure than localStorage.</p>
    </div>
    <div className="card p-4 mb-4">
    <p className='fs-4 fw-medium'>Q2: Compare SQL and NoSQL databases?</p>
    <p>Ans: SQL databases support structured query language.It supports table based data type.It's rational.It's secured  and free</p>
    <p>On the contrary,NoSQL databases doesn't have any query language.It supports document,collections oriented.It's non rational and It's easy to use and best feature is that high performance</p>

    </div>
    <div className="card p-4 mb-4">
        <p className='fs-4 fw-medium'>Q3: What is express js? What is Nest JS?</p>
        <p>Ans : Express js is a web application framework of node js.It provides a wide range of functionality for consisting web and mobile application.</p>
        <p>Nest js is a node js framework for server side application.It's based on typescript and javascript. </p>
    </div>
    <div className="card p-4 mb-4">
        <p className='fs-4 fw-medium'>Q4: What is MongoDB aggregate and how does it work?</p>
        <p>Ans : MongoDB aggregation is akind of  operations which process data records and return computed result.It collects values from different documents  and group them together and performs various types of operations on them. </p>
    </div>

    </div>
  )
}

/* eslint-disable no-unused-vars */
import React from 'react';

export default function Loader(){
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}


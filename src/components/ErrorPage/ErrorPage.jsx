/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Error from "../../assets/images/Error.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="d-flex align-items-center p-5 mt-5">
      <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 fw-bold display-2 text-warning">
            {status || 404}
          </h2>
          <img src={Error} alt="Error image" className="img-fluid" />
        </div>
          <Link to="/" className="btn bg-info-subtle fw-bold" id="homeBack">
            Back to homepage
          </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

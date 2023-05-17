import React from "react";
import latest_1 from "../../assets/images/Latest/latest_1.avif";
import latest_2 from "../../assets/images/Latest/latest_2.avif";
import latest_3 from "../../assets/images/Latest/latest_3.avif";
import latest_4 from "../../assets/images/Latest/latest_4.avif";

export default function Latest() {
  return (
    <div className="container my-5">
      <div className="row">
        <h2 className="my-5">Latest Collections</h2>
        <div className="col-lg-3 col-12 text-center mb-5">
          <img
            src={latest_1}
            alt="toy gallery pic"
            className="img-fluid  latestPic w-100"
          />
        </div>
        <div className="col-lg-3 col-12 text-center mb-5">
          <img
            src={latest_2}
            alt="toy gallery pic"
            className="img-fluid  latestPic w-100"
          />
        </div>
        <div className="col-lg-3 col-12 text-center mb-5">
          <img
            src={latest_3}
            alt="toy gallery pic"
            className="img-fluid  latestPic w-100"
          />
        </div>
        <div className="col-lg-3 col-12 text-center mb-5">
          <img
            src={latest_4}
            alt="toy gallery pic"
            className="img-fluid  latestPic w-100"
          />
        </div>
      </div>
    </div>
  );
}

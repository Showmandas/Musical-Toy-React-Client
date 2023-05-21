import React, { useEffect } from "react";
import gallery_1 from "../../assets/images/Gallery/gallery-1.avif";
import gallery_2 from "../../assets/images/Gallery/gallery-2.avif";
import gallery_3 from "../../assets/images/Gallery/gallery-3.avif";
import gallery_4 from "../../assets/images/Gallery/gallery-4.avif";
import gallery_5 from "../../assets/images/Gallery/gallery-5.avif";
import gallery_6 from "../../assets/images/Gallery/gallery-6.avif";
import gallery_7 from "../../assets/images/Gallery/gallery-7.avif";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Gallery() {
  useEffect(() => {
    AOS.init({
      // Customize options here (if needed)
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <h2 className="my-3">Toy's Gallery</h2>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_1}
            alt="toy gallery pic"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_2}
            alt="toy gallery pic"
            className="img-fluid w-75 h-100"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_3}
            alt="toy gallery pic"
            className="img-fluid w-75 h-100"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_4}
            alt="toy gallery pic"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_5}
            alt="toy gallery pic"
            className="img-fluid w-75 h-100"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_6}
            alt="toy gallery pic"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-lg-4 col-12 text-center mb-5">
          <img
            src={gallery_7}
            alt="toy gallery pic"
            className="img-fluid w-75"
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import aboutPic from "../../assets/images/aboutus.avif";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
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
      <div
        className="row"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="col-lg-6 col-12 my-5">
          <h2 className="mb-4">About Our Toy Shop</h2>
          <p className=" text-secondary">
            At Musical Toys, we believe in the power of play and the magic of
            music. As passionate advocates for early childhood development, we
            offer a delightful collection of musical toys that inspire
            creativity and foster a love for music. Our carefully curated
            selection features miniature instruments and interactive toys
            designed to engage young minds and introduce them to the joy of
            rhythm, melody, and harmony. We strive to provide high-quality,
            safe, and educational musical toys that ignite imagination and
            create lifelong musical memories.With a commitment to quality and
            safety, Musical Toys ensures that every product we offer is not only
            entertaining but also designed to enhance cognitive skills and motor
            coordination. Our mission is to bring the magic of music into the
            lives of children, nurturing their love for the arts and fostering a
            lifelong appreciation for the wonders of sound.
          </p>
        </div>
        <div className="col-lg-6 col-12 my-4">
          <img
            src={aboutPic}
            alt="about us pic"
            className="img-fluid w-100 h-75"
          />
        </div>
      </div>
    </div>
  );
}

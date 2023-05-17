import React from 'react'
import bannerImg from '../../assets/images/bannerImg.webp'
export default function Banner() {
  return (
    <div className='banner-section mt-5'>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12 mt-5">
            <div className="banner-content w-100">
              <h1 className='fw-bold mb-4'>Kingdom of Musical Toys</h1>
              <p className=' text-secondary'>Discover the joy of music with our wide range of musical toys for all ages.Musical toys bring joy and creativity to children, fostering a love for music through play and exploration.</p>
              <button className="btn bg-info-subtle rounded-lg primary">Shop Now</button>
            </div>
            </div>
            <div className="col-lg-6 col-12">
            <img
              src={bannerImg}
              alt="Musical Toys"
              className="img-fluid rounded-circle w-75 px-5 mt-3"
            />
            </div>
        </div>
    </div>

    </div>
  )
}

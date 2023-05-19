import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Latest from '../Extra-Section/Latest'
import About from '../AboutUs/About'
import Category from '../ShopCategory/Category'

export default function Home() {
   //add dynamic title
  useEffect(()=>{
document.title="Musical Toy | Home"
  },[]);
  return (
    <div>
        <Banner/>
        <About/>
        <Gallery/>
        <Category/>
        <Latest/>
    </div>
  )
}

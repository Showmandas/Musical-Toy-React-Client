import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Latest from '../Extra-Section/Latest'
import About from '../AboutUs/About'

export default function Home() {
  return (
    <div>
        <Banner/>
        <About/>
        <Gallery/>
        <Latest/>
    </div>
  )
}

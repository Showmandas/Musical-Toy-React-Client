import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleToy() {
    // const musicData=useLoaderData();
    // console.log(musicData)
    const[musicdata,setMusicData]=useState({})
    const{id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:5173/singletoy/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))

    },[])
  return (
    <div>SingleToy</div>
  )
}

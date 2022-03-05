import React from 'react'
import GalleryImage from '../components/GalleryImage'
import NavBar from '../components/NavBar'
import ParticleBackground from '../components/ParticleBackground'

function Gallery() {
  return (
    <div className="container-xxl">
        <NavBar page="gallery"/>
        <div className="pt-5 row">
           <span className="h2 d-flex justify-content-center align-items-center pb-4" style={{fontWeight:'bolder',color:'#0093D1'}}>Gallery</span>
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
           <GalleryImage />
        </div>
        <ParticleBackground />
    </div>
  )
}

export default Gallery
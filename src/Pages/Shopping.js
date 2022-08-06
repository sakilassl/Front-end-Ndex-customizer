import React from 'react'
import ImgCard from '../Components/ImgCard'
import Navbar from '../Components/Navbar'
import img from '../Components/Images/img.jpeg'
import "../Components/ImgCard.css";
import { Link } from 'react-router-dom';
import ShowRate from '../Components/Rating/ShowRate';

function Shopping() {
  return (
    <div>
      <Navbar />
      <ImgCard /> 
      <ShowRate />
</div> 
  )
}

export default Shopping
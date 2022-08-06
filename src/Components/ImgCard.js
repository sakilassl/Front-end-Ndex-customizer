import React from 'react'
import img from '../Components/Images/download.jpeg'
import "./ImgCard.css";
import { Link } from 'react-router-dom';
import RatingResponse from './RatingResponse';

function ImgCard() {
  return (

        <div class="card">

  <img src={img} />
  <h1>Short Frock</h1>
  <p class="price">$7</p>
  <p>From United States</p>
  <Link to="/BillingDetails">
  <p><button>Buy product</button></p>
  </Link>
</div>
  )
}

export default ImgCard
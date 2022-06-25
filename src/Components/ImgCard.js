import React from 'react'
import img from '../Components/Images/img.jpeg'
import "./ImgCard.css";
import RatingResponse from './RatingResponse';

function ImgCard() {
  return (

        <div class="card">

  <img src={img} />
  <h1>Short Frock</h1>
  <p class="price">$7</p>
  <p>Product ID : p001</p>
  <p><button>Add to Cart</button></p>
  {/* <RatingResponse /> */}
</div>
  )
}

export default ImgCard
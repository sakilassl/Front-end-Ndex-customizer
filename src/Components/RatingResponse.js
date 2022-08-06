import React, { useState } from 'react'
import StarRating from './Rating/StarRating';
import "../Components/ImgCard.css"
import Ocards from './Ordercards/Ocards';
import Navbar from './Navbar';

function RatingResponse({Product_id,Sid}) {
return (
    <div>
    <Navbar />
    <Ocards />
    <StarRating Product_id={"p001"} Sid={"6006"}/>
    </div>
)
}
export default RatingResponse
import React, { useState,useEffect } from "react";
import '../Rating/StarRating.css';
import axios from "axios";

const ShowRate = ({Product_id,Sid}) => {

  const[Rate,SetRate] = useState([]);
  const [review, setreview] = useState([]);
  const [hover, setHover] = useState(0);
  const [Desc, setDesc] = useState(0);
  var axios = require('axios');

  useEffect(()=>{getreview()},[])
  useEffect(()=>{getrating()},[])

   // Enter product id here
   const id ="p001"

function getreview(){
  axios.get(`http://localhost:8082/rating/review/${id}`).
  then((res)=>{
    setreview(res.data);
   console.log(res);
}).catch((err)=>{
 console.log(err);
 })
 }

  function getrating(){
    axios.get(`http://localhost:8082/rating/${id}`).
    then((res)=>{
      SetRate(res.data);
     console.log(res);
  }).catch((err)=>{
   console.log(err);
   })
   }
   const rating = Rate.meanRatingValue;

  return (
    <div>
      <h2> Customer Reviews</h2>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            // onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <span className="star">
                &#9733;
            </span>
          </button>
        );
      })}
    </div>


    <h2>{rating}  Ratings </h2>
      <table>
        <th>Customer</th>
        <th>Rate</th>
        <th>Review</th>
        {review.map(Assign =>{return(
      <tr>
      <td>Annoimous Buyer</td>
      <td>{Assign.ratingValue}</td>
      <td>{Assign.description}</td>
    </tr>
    )})}
      </table>
    </div>
  );
};

export default ShowRate;
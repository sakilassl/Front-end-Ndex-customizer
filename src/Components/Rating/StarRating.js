import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Rating/StarRating.css';

const StarRating = ({Product_id,Sid}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [Desc, setDesc] = useState(0);
  const navigate = useNavigate();
  
  const RatingID ='R001';

  const printData = async(event) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "productId": Product_id,
      "description": Desc,
      "ratingValue": rating,
      "ratingId": RatingID,
      "sid": Sid
    });
    console.log(data)
    
    var config = {
      method: 'post',
      url: 'http://localhost:8082/rating',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("rating added successfully")
      navigate('/Order')
      
    })
    .catch(function (error) {
      console.log(error);
      alert("rating does not added")
    });
}

  return (
    <div>
          <h1>Rate And Review</h1>
    <p>Share Your Experience to help Others</p>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <span className="star">
                &#9733;
            </span>
          </button>
        );
      })}
    </div>
    <p>Add Your Comment Here</p>
      <form>

    <textarea onChange={(e) => {setDesc(e.target.value)}} class="input"></textarea>
      </form>
      <p>
      <button onClick={printData} class="bttn">Submit</button>
      </p>
    </div>
  );
};

export default StarRating;
import React, { useState } from 'react'
import axios from 'axios';

function RatingResponse() {

    const[Product_id, setProduct_id] = useState('');
    const[Desc, setDesc] = useState('');
    const[RatingValue, setRatingValue] = useState('');
    const[RatingID, setRatingRatingID] = useState('');
    const[Sid, setSid] = useState('');

const printData = async(event) => {


    var axios = require('axios');
    var data = JSON.stringify({
      "productId": Product_id,
      "description": Desc,
      "ratingValue": RatingValue,
      "ratingId": RatingID,
      "sid": Sid
    });
    console.log(data)
    
    var config = {
      method: 'post',
      url: 'http://localhost:8081/rating',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });





// var data = {
//     productId : Product_id,
//     description : Desc,
//     ratingValue : RatingValue,
//     ratingId : RatingID,
//     sid : Sid
// }
// console.log(data)
// await axios.post("http://localhost:8081/rating", data)
// .then((res)=>{
// console.log(res);
// }).catch((err)=>{
// console.log(err);
// });
}
return (
    <div>
   
<form className='form' onSubmit={printData}>
<div class="form-group">

   
<br/>
<label for="Roll"> Product id</label>
<input onChange={(e) => {setProduct_id(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select user roll here" />
</div>
<div class="form-group">
<label for="name">Description</label>
<input onChange={(e) => {setDesc(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter User name here" />
</div>
<div class="form-group">
<label for="UserID">Rating Value</label>
<input onChange={(e) => {setRatingValue(e.target.value)}} type="text" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter User id here" />
</div>
<div class="form-group">
<label for="Password">Rating ID</label>
<input onChange={(e) => {setRatingRatingID(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter Password here" />
</div>
<div class="form-group">
<label for="Confirm"> Sid</label>
<input onChange={(e) => {setSid(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter password again" />
</div>
<button type='submit' class="sub_btn">Save</button>
</form>
</div>
)
}
export default RatingResponse
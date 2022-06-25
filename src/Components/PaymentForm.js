import React, { useState } from 'react'
import "../Components/PaymentForm.css"
import axios from 'axios';


function PaymentForm() {
  const[userId, setuserId] = useState('');
    const[Email, setEmail] = useState('');
    const[FName, setFName] = useState('');
    const[LName, setLName] = useState('');
    const[Phone1, setPhone1] = useState('');
    const[Phone2, setPhone2] = useState('');
    const[Address, setAddress] = useState('');
    const[District, setDistrict] = useState('');
    const[City, setCity] = useState('');

    const printData = async() => {
    var axios = require('axios');
    var data = {
      userId : userId,
      email : Email,
      firstName : FName,
      lastName : LName,
      phoneOne : Phone1,
      phoneTwo: Phone2,
      address: Address,
      district: District,
      city : City
    }
    await axios.post('http://localhost:8081/billing',data)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}
  return (
   
    <form className='form'>
        <h2>Billing details</h2>
    <div class="form-group">
      
    <div class="form-group">
      <label for="Email">Email </label><br></br>
      <input onChange={(e) => {setuserId(e.target.value)}} type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email here" />
    </div>


    <div class="form-group">
      <label for="Email">User id </label><br></br>
      <input onChange={(e) => {setEmail(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email here" />
    </div>

    <div class="form-group">
      <label for="Intro">First Name </label><br></br>
      <input onChange={(e) => {setFName(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter First Name here" />
    </div>

    <div class="form-group">
      <label for="LName">Last Name </label> <br></br>
      <input onChange={(e) => {setLName(e.target.value)}} type="text" required class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Last Name here" />
    </div>

    <div class="form-group">
      <label for="Content">Phone 1 </label><br></br>
      <input onChange={(e) => {setPhone1(e.target.value)}} type="tel" required class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Phone 1" />
    </div>

    <div class="form-group">
      <label for="Date">Phone 2 </label><br></br>
      <input onChange={(e) => {setPhone2(e.target.value)}} type="tel" required class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter Phone 2" />
    </div>
   
    <div class="form-group">
      <label for="Content">Address </label><br></br>
      <input onChange={(e) => {setAddress(e.target.value)}} type="text" required class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Address here" />
    </div>

    <div class="form-group">
      <label for="Content">District </label><br></br>
      <input onChange={(e) => {setDistrict(e.target.value)}} type="text" required class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter District here" />
    </div>

    <div class="form-group">
      <label for="Content">City </label><br></br>
      <input onChange={(e) => {setCity(e.target.value)}} type="text" required class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter City here" />
    </div>

    <div class="form-check">
    </div>
    <button onClick={printData} type="submit" class="sub_btn">Save</button>
    </div>
    </form>
 
  )
}

export default PaymentForm
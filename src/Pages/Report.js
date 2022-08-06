import React from 'react'
// import '../Components/PdfBtn.css';
// import '../Components/Rating/StarRating.css'
import axios from 'axios';
import '../Pages/Report.css'

function Report() {


  const Productpdf = async(event) => {
var config = {
  method: 'get',
  url: 'http://localhost:8082/report/product',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  let pdf=response.data.downloadUrl;
  const link = document.createElement('a');
link.href = pdf;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
})
.catch(function (error) {
  console.log(error);
});}

const Ratingpdf = async(event) => {
  var config = {
    method: 'get',
    url: 'http://localhost:8082/report/rating',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    let pdf=response.data.downloadUrl;
    const link = document.createElement('a');
  link.href = pdf;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  })
  .catch(function (error) {
    console.log(error);
  });}

  const Userpdf = async(event) => {
    var config = {
      method: 'get',
      url: 'http://localhost:8082/report/registerd_customer',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let pdf=response.data.downloadUrl;
      const link = document.createElement('a');
    link.href = pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    })
    .catch(function (error) {
      console.log(error);
    });}

    const Transactionpdf = async(event) => {
      var config = {
        method: 'get',
        url: 'http://localhost:8082/report/order_',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        let pdf=response.data.downloadUrl;
        const link = document.createElement('a');
      link.href = pdf;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      })
      .catch(function (error) {
        console.log(error);
      });}
	
  return (
    <div>
     <div >
      <h1>Admin Panel </h1><h2> Reports Section</h2>
      </div>
      <table>
        <tr>
          <td>Product Report</td>
          <td>Rating Report</td>
          <td>User Report</td>
          <td>Transaction Report</td>
        </tr>
        <tr>
      <th>
        <button onClick={Productpdf} class="down">Download from here</button></th>
      <th>
        <button onClick={Ratingpdf} class="down">Download from here</button></th>
      <th>
        <button onClick={Userpdf} class="down">Download from here</button></th>
      <th>
        <button onClick={Transactionpdf} class="down">Download from here</button></th>
        </tr>
      </table>
    </div>
  )
}

export default Report



import React from 'react'
import Navbar from '../Components/Navbar'
import Ocards from '../Components/Ordercards/Ocards'
import Ocardsf from '../Components/Ordercards/Ocardsf'
import Ocardsth from '../Components/Ordercards/Ocardsth'
import Ocardstwo from '../Components/Ordercards/Ocardstwo'
import StarRating from '../Components/Rating/StarRating'
import { Link } from 'react-router-dom'
import RatingResponse from '../Components/RatingResponse'


function Order() {
  return (
    <div>
      <Navbar />
      <table>
      <div class='card'>
      <th><Ocards /> <Link to="/Ratingresponse">
        <button>Add A Rating</button></Link></th>
      <th><Ocardstwo /><Link to="/Ratingresponse" >
        <button>Add A Rating</button></Link></th>
      <th><Ocardsth /><Link to="/Ratingresponse">
        <button>Add A Rating</button></Link></th>
      <th><Ocardsf /><Link to="/Ratingresponse">
        <button>Add A Rating</button></Link></th>
      </div>
      </table>
    </div>  
  )
}

export default Order
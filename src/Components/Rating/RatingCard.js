import React from 'react'
import StarRating from '../../Components/Rating/StarRating'

function RatingCard() {
  return (
    <div>
    <div class="card">
    <h1>Rate And Review</h1>
    <p>Share Your Experience to help Others</p>
    <StarRating />
    <p>Add Your Comment</p>
    <p><button>Confirm Rating</button></p>
    </div>

    </div>
  )
}

export default RatingCard
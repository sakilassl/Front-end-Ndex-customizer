import React from 'react'
import '../Components/PdfBtn.css';

function Report() {
  const shoot = (a, b) => {
    alert("your pdf is ready");
  }
	
  return (
    <div>
        <button onClick={(event) => shoot("Goal!", event)}>Genarate Reports</button>
    </div>
  )
}

export default Report



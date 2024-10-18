import React from 'react'
import './Email.css'

const Email = () => {
  return (
    <div className='Email-container'>
     <div className='email-content'>
       <h1>Save time and Save money</h1>
       <p>SignUp we'll send best deals for you</p>
       <div className="input">
        <input type='text'></input>
        <button>Subscribe</button>
       </div>

       <div className="email-condition">
        <input type='checkbox' id='check'></input>
        <p>Send me a link to get free HeavenHorizon.com App</p>
       </div>


       <hr></hr>
       <div className="hr-button">
        <button>List Your Property</button>
      </div>
     </div>
      
    </div>
  )
}

export default Email

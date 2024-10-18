import React from 'react'
import './Featured.css'
import {assets} from '../../assets/assets'
const Featured = () => {
  return (
    <>
    
   
    <div className='featured'>
      
    <div className="featured-items">
      <img src={assets.ooty} alt="" />
      <div className="img-content">
        <h3>40 properties</h3>
      </div>
      <div className="featured-item-title">Ooty</div>
    </div>
  
    <div className="featured-items">
      <img src={assets.kodaikanal} alt="" />
      <div className="img-content">
      <h3>34 properties</h3>
      </div>
      <div className="featured-item-title">Kodaikanal</div>
    </div>
  
    <div className="featured-items">
      <img src={assets.munnar} alt="" />
      <div className="img-content">
      <h3>45 properties</h3>
      </div>
      <div className="featured-item-title">Munnar</div>
    </div>
  
    <div className="featured-items">
      <img src={assets.goa} alt="" />
      <div className="img-content">
      <h3>80 properties</h3>
      </div>
      <div className="featured-item-title">Goa</div>
    </div>
  
    <div className="featured-items">
      <img src={assets.manali} alt="" />
      <div className="img-content">
      <h3>65 properties</h3>
      </div>
      <div className="featured-item-title">Manali</div>
    </div>
  
    <div className="featured-items">
      <img src={assets.alapi} alt="" />
      <div className="img-content">
      <h3>50 properties</h3>
      </div>
      <div className="featured-item-title">Alapi</div>
    </div>
  </div>
  </>
  )
}

export default Featured

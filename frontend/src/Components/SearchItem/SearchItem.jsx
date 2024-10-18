import React from 'react';
import './SearchItem.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'; 

const SearchItem = ({ hotel }) => {
  const navigate = useNavigate(); 

  const changePage = () => {
    navigate(`/hotels/${hotel.id}`); 
  };

  return (
    <div className='searchItem'>
      <img src={hotel.img} alt={hotel.name} className='siImg'/>
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.distance}</span>
        <span className="siTaxiOp">{hotel.taxiOp}</span>
        <span className="siSubtitle">{hotel.subtitle}</span>
        <span className="siFeatures">{hotel.features}</span>
        <span className="siCancelOp">{hotel.cancelOp}</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">{hotel.price}</span>
          <span className="siTaxiOp">Includes taxi fee</span>
          <button className='siCheckButton' onClick={changePage}>See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
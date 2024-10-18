import React, { useState } from 'react'
import './PropertyList.css'
import { assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PropertyList = () => {

  return (
    <>
    <div className='propertyList'>
      <div className="propertylist-item">
        <img src={assets.hotel} alt="" />
        <div className="pl-img-content">
            <h2>100+ hotels</h2>
        </div>
        <div className="propertylist-title">
           <h2>Hotels</h2>
        </div>
      </div>

      <div className="propertylist-item">
        <img src={assets.apartment} alt="" />
        <div className="pl-img-content">
            <h2>50+ apartments</h2>
        </div>
        <div className="propertylist-title">
        <h2>Apartments</h2>
        </div>
      </div>

      <div className="propertylist-item">
        <img src={assets.viila} alt="" />
        <div className="pl-img-content">
            <h2>40+ villas</h2>
        </div>
        <div className="propertylist-title">
        <h2>Villas</h2>
        </div>
      </div>

      <div className="propertylist-item">
        <img src={assets.restuarant} alt="" />
        <div className="pl-img-content">
            <h2>100+ restuarants</h2>
        </div>
        <div className="propertylist-title">
        <h2>Restuarants</h2>
        </div>
      </div>

      <div className="propertylist-item">
        <img src={assets.resort} alt="" />
        <div className="pl-img-content">
            <h2>25+ resorts</h2>
        </div>
        <div className="propertylist-title">
        <h2>Resorts</h2>
        </div>
      </div>

      <div className="propertylist-item">
        <img src={assets.guesthouse} alt="" />
        <div className="pl-img-content">
            <h2>35+ guest houses</h2>
        </div>
        <div className="propertylist-title">
        <h2>Guest Houses</h2>
        </div>
      </div>
    </div>
  
    <div className="glimpse">
      <h1>Glimpes of hotels</h1>
      </div>
    <div className="pl-img-slides">
     
     
    <Swiper
      
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        
      className='custom-swiper2'
    >
      <SwiperSlide className='custom-slides-2'>
        <video src={assets.glimpse1} autoPlay loop muted></video>
      </SwiperSlide>
      <SwiperSlide className='custom-slides-2'>
        <video src={assets.glimpse2} autoPlay loop muted></video>
      </SwiperSlide>
      <SwiperSlide className='custom-slides-2'>
        <video src={assets.glimpse3} autoPlay loop muted></video>
      </SwiperSlide>
      
      ...
    </Swiper>
    </div>

    <div className="guest-loves">
    <h1>Homes guests loves</h1>
      
      <div className="guest-loves-items">
        <img src={assets.l1}></img>
        <div className="hotel-content">
        <p>Wake up to stunning ocean views in this deluxe room, complete with a private terrace, elegant decor, and direct beach access.</p>
        </div>
      </div>
      
      <div className="guest-loves-items">
        <img src={assets.l2}></img>
        <div className="hotel-content">
        <p>Designed for families, this room includes two queen-sized beds, a play area for kids, and easy access to the pool,expansive living area for entertaining guests.</p>
     
        </div>
      </div>

      <div className="guest-loves-items">
        <img src={assets.l3}></img>
        <div className="hotel-content">
        <p>Our Penthouse Suite offers ultimate luxury with a rooftop pool, private bar, and expansive living area for entertaining guests.</p>

        </div>
      </div>

      <div className="guest-loves-items">
        <img src={assets.l4}></img>
        <div className="hotel-content">
        <p>Enjoy a rustic yet modern retreat in our Cozy Cottage, featuring a fireplace, garden views, and a relaxing outdoor hot tub.</p>

        </div>
      </div>

      
      <div className="guest-loves-items">
        <img src={assets.l5}></img>
        <div className="hotel-content">
        <p>Perfect for business travelers, the Executive Room offers a spacious workspace, high-speed Wi-Fi, and premium bedding.</p>

        </div>
      </div>

      
      <div className="guest-loves-items">
        <img src={assets.l6}></img>
        <div className="hotel-content">
       
        <p>Experience unmatched comfort in our Luxury Suite with panoramic city views, a king-sized bed, and a private balcony.</p>

        </div>
      </div>

    </div>
    </>
    
  )
}
  
export default PropertyList

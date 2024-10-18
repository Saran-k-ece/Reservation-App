import React from 'react';
import './Holidays.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Footer/Footer'

const Holidays = () => {
  return (
    <>
      <div className='holidays'>
        <div className="holiday-items">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='custom-swiper3'
          >
            <SwiperSlide className='custom-slide3'>
              <img src={assets.holiday1} alt='Holiday Spot 1' />
              <p>40+ Tourist Spots </p>   
              <h4>Plan ahead for a smooth and enjoyable visit.</h4>
            </SwiperSlide>
            <SwiperSlide className='custom-slide3'>
              <img src={assets.holiday2} alt='Holiday Spot 2' />
              <h1>Kodaikanal</h1>
              <p>20+ Tourist Spots</p>  
              <h4>Organize your itinerary for a stress-free trip.</h4>
            </SwiperSlide>
            <SwiperSlide className='custom-slide3'>
              <img src={assets.holiday3} alt='Holiday Spot 3' />
              <p>30+ Tourist Spots </p>  
              <h4>Maximize your time by planning ahead.</h4>
            </SwiperSlide>
            <SwiperSlide className='custom-slide3'>
              <img src={assets.holiday4} alt='Holiday Spot 4' />
              <h1>Goa</h1>
              <p>45+ Tourist Spots</p>  
              <h4>Prepare early for a fully immersive experience.</h4>
            </SwiperSlide>
          </Swiper>   
        </div>
      </div>

      <div className="holiday-description">
        <h1>Best Holiday Spots</h1>
        <div className="desc-item">
          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide ' >
              <img src={assets.manali01}></img>
              <h1>Manali</h1>
             <a href="https://www.google.com/maps/dir/coimbatore/Manali,+Himachal+Pradesh/@21.2809491,67.0513091,3323911m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x39048708163fd03f:0x8129a80ebe5076cd!2m2!1d77.1891761!2d32.2431872?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.manali02}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.manali03}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.manali04}></img>
            </SwiperSlide>
           
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.ladakh1}></img>
              <h1>Ladakh</h1>
              <a href="https://maps.app.goo.gl/k1JUNQYukS8ZqD198">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.ladakh2}></img>
            </SwiperSlide >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.ladakh3}></img>
            </SwiperSlide >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.ladakh4}></img>
            </SwiperSlide>
           
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
           
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.goa01}></img>
              <h1>Goa</h1>
              <a href="https://www.google.com/maps/dir/coimbatore/Goa/@13.0277174,72.8469316,868833m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3bbfba106336b741:0xeaf887ff62f34092!2m2!1d74.123996!2d15.2993265?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.goa02}></img>
            </SwiperSlide >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.goa03}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.goa04}></img>
            </SwiperSlide>
           
          </Swiper>


          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.munnar01}></img>
              <h1>Munnar</h1>
              <a href="https://www.google.com/maps/dir/coimbatore/Munnar,+Kerala+685612/@10.5527089,76.7708492,109588m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3b0799794d099a6d:0x63250e5553c7e0c!2m2!1d77.0595248!2d10.0889333?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.munnar02}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.munnar03}></img>
            </SwiperSlide >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.munnar04}></img>
            </SwiperSlide>
           
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.alapi01}></img>
              <h1>Alappuzha</h1>
              <a href="https://www.google.com/maps/dir/coimbatore/Alappuzha,+Kerala/@10.2500185,75.9414372,219389m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x3b0884f1aa296b61:0xb84764552c41f85a!2m2!1d76.3388484!2d9.4980667?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.alapi02}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.alapi03}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.alapi04}></img>
            </SwiperSlide>
           
          </Swiper>

          <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: ['-20%', 0, -1] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative,Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper3"
          >
            <SwiperSlide className='swiper-slide '>
              <img src={assets.jk1}></img>
              <h1>Jammu&Kashmir</h1>
              <a href="https://www.google.com/maps/dir/coimbatore/Jammu+and+Kashmir/@21.810701,65.2930335,3311798m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!2m2!1d76.9558321!2d11.0168445!1m5!1m1!1s0x38e1092499ffa89d:0x6567a6d4697e7f1!2m2!1d75.3412179!2d33.277839?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">Click</a>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.jk2}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.jk3}></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide '>
              <img src={assets.jk4}></img>
            </SwiperSlide>
           
          </Swiper>
          

       
        

          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Holidays;

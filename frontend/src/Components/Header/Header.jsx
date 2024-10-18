import React, { useState } from 'react';
import './Header.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const[destination,setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),  
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOptionChange = (name, operation) => {
    setOption((prev) => ({
      ...prev,
      [name]: operation === 'increment' ? prev[name] + 1 : prev[name] - 1 < 0 ? 0 : prev[name] - 1,
    }));
  };

  const navigate = useNavigate()
  const handleSearch =()=>{
    navigate("/hotels",{state:{destination,option,date}})
  }  

  const changePage = () => {
    navigate('/holidays'); 
  };

  return (
    <>
      <div className='header'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='custom-swiper'
        >
          <SwiperSlide className='custom-slide'>
            <img src={assets.Hotel1} alt='Hotel 1' />
          </SwiperSlide>
          <SwiperSlide className='custom-slide'>
            <img src={assets.Hotel3} alt='Hotel 3' />
          </SwiperSlide>
          <SwiperSlide className='custom-slide'>
            <img src={assets.Hotel2} alt='Hotel 2' />
          </SwiperSlide>
        </Swiper>

        <div className='swiper-content'>
          <h1>Search and Book Your Hotels</h1>
          <p>
            Find the perfect hotel for your stay. Whether you're looking for luxury,
            comfort, or a budget-friendly option, we have it all!
          </p>
          <button className='cta-button' onClick={changePage}>Get Started</button>
        </div>

        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type='text' placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)} />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                minDate = {new Date()}
              />
            )} 
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText' onClick={() => setOpenOptions(!openOptions)}>{`${option.adults} adults . ${option.children} children . ${option.rooms} rooms` }</span>
            <span ></span>
            {openOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('adults', 'decrement')}>-</button>
                  <span className='optionCounterNumber'>{option.adults}</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('adults', 'increment')}>+</button>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Childs</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('children', 'decrement')}>-</button>
                  <span className='optionCounterNumber'>{option.children}</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('children', 'increment')}>+</button>
                </div>

                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('rooms', 'decrement')}>-</button>
                  <span className='optionCounterNumber'>{option.rooms}</span>
                  <button className='optionCounterButton' onClick={() => handleOptionChange('rooms', 'increment')}>+</button>
                </div>
              </div>
            )}
          </div>

          <div className='headerSearchItem'>
            <button className='btn1' onClick={handleSearch}>Search</button>
          </div>
        </div>

      
      </div>
    </> 
  );
};

export default Header;

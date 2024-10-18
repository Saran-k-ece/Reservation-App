import React, { useState } from 'react';
import './List.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem/SearchItem';
import { assets } from '../../assets/assets'; // Adjust this path if needed

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination || '');
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);

  const hotels = [
    {
      id: 1,
      name: 'Tower Street Apartments',
      distance: '500m from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Studio Apartment with Air conditioning',
      features: 'Entire studio 1 bathroom 21m² 1 full bed',
      cancelOp: 'Free cancellation',
      price: '₹8000',
      destination: 'Ooty',
      img: assets.ihcl1,
    },
    {
      id: 2,
      name: 'Sunset Hotel',
      distance: '1km from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Luxury Suite with Ocean View',
      features: '2 bedrooms 2 bathrooms 50m²',
      cancelOp: 'Free cancellation',
      price: '₹12000',
      destination: 'Ooty',
      img: assets.ihcl2,
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      distance: '2km from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Cozy Cabin in the Woods',
      features: '3 bedrooms 2 bathrooms 100m²',
      cancelOp: 'Free cancellation',
      price: '₹15000',
      destination: 'Ooty',
      img: assets.ihcl3,
    },
    {
      id: 4,
      name: 'City Center Inn',
      distance: '200m from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Modern Hotel with City View',
      features: '1 bedroom 1 bathroom 30m²',
      cancelOp: 'Free cancellation',
      price: '₹6000',
      destination: 'Munnar',
      img: assets.ihcl5,
    },
    {
      id: 5,
      name: 'Countryside Lodge',
      distance: '5km from center',
      taxiOp: 'Free airport taxi',
      subtitle: 'Charming Lodge with Scenic Views',
      features: '1 bedroom 1 bathroom 40m²',
      cancelOp: 'Free cancellation',
      price: '₹7000',
      destination: 'Ooty',
      img: assets.ihcl6,
    },

    {
        id: 1,
        name: 'Sea Breeze Resort',
        distance: '300m from the beach',
        taxiOp: 'Free airport shuttle',
        subtitle: 'Beachfront Resort with Pool',
        features: '1 bedroom, 1 bathroom, 35m², balcony with sea view',
        cancelOp: 'Free cancellation',
        price: '₹5,000',
        destination: 'Goa',
        img: assets.goa01,
      },
      {
        id: 2,
        name: 'Palm Grove Cottages',
        distance: '1.5km from the beach',
        taxiOp: 'Free airport taxi',
        subtitle: 'Cozy Cottages Surrounded by Palm Trees',
        features: '2 bedrooms, 2 bathrooms, 70m²',
        cancelOp: 'Free cancellation',
        price: '₹6,500',
        destination: 'Goa',
        img: assets.goa02,
      },
      {
        id: 3,
        name: 'Ocean View Villa',
        distance: '500m from the beach',
        taxiOp: 'Free airport taxi',
        subtitle: 'Luxurious Villa with Ocean Views',
        features: '3 bedrooms, 3 bathrooms, 150m²',
        cancelOp: 'Free cancellation',
        price: '₹12,000',
        destination: 'Goa',
        img: assets.goa03,
      },
      {
        id: 4,
        name: 'Sunny Resort',
        distance: '2km from the beach',
        taxiOp: 'Free airport taxi',
        subtitle: 'Modern Resort with Spa',
        features: '1 bedroom, 1 bathroom, 40m²',
        cancelOp: 'Free cancellation',
        price: '₹8,000',
        destination: 'Goa',
        img: assets.goa04,
      },
      {
        id: 5,
        name: 'Beachside Inn',
        distance: '200m from the beach',
        taxiOp: 'Free airport taxi',
        subtitle: 'Budget Inn with Easy Beach Access',
        features: '1 bedroom, 1 bathroom, 30m²',
        cancelOp: 'Free cancellation',
        price: '₹3,500',
        destination: 'Goa',
        img: assets.goa01,
      },
    
    
      {
        id: 6,
        name: 'Himalayan View Hotel',
        distance: '1km from Mall Road',
        taxiOp: 'Free airport shuttle',
        subtitle: 'Hotel with Stunning Mountain Views',
        features: '1 bedroom, 1 bathroom, 35m²',
        cancelOp: 'Free cancellation',
        price: '₹4,500',
        destination: 'Manali',
        img: assets.manali01,
      },
      {
        id: 7,
        name: 'Snow Peak Lodge',
        distance: '2km from Solang Valley',
        taxiOp: 'Free airport taxi',
        subtitle: 'Cozy Lodge with Snow Activities',
        features: '2 bedrooms, 2 bathrooms, 80m²',
        cancelOp: 'Free cancellation',
        price: '₹6,000',
        destination: 'Manali',
        img: assets.manali02,
      },
      {
        id: 8,
        name: 'Alpine Retreat',
        distance: '1.5km from Hadimba Temple',
        taxiOp: 'Free airport taxi',
        subtitle: 'Mountain Resort with Garden',
        features: '3 bedrooms, 3 bathrooms, 150m²',
        cancelOp: 'Free cancellation',
        price: '₹10,000',
        destination: 'Manali',
        img: assets.manali03,
      },
      {
        id: 9,
        name: 'Mountain Echo Hotel',
        distance: '3km from Old Manali',
        taxiOp: 'Free airport taxi',
        subtitle: 'Hotel with Traditional Décor',
        features: '1 bedroom, 1 bathroom, 40m²',
        cancelOp: 'Free cancellation',
        price: '₹5,500',
        destination: 'Manali',
        img: assets.manali04,
      },
      {
        id: 10,
        name: 'Nature\'s Paradise',
        distance: '2.5km from Rohtang Pass',
        taxiOp: 'Free airport taxi',
        subtitle: 'Eco-Friendly Hotel in Scenic Location',
        features: '2 bedrooms, 2 bathrooms, 90m²',
        cancelOp: 'Free cancellation',
        price: '₹7,500',
        destination: 'Manali',
        img: assets.manali02,
      },
    
      
      {
        id: 11,
        name: 'Hill View Resort',
        distance: '500m from Kodaikanal Lake',
        taxiOp: 'Free airport shuttle',
        subtitle: 'Resort with Lake Views',
        features: '1 bedroom, 1 bathroom, 35m²',
        cancelOp: 'Free cancellation',
        price: '₹4,000',
        destination: 'Kodaikanal',
        img: assets.kodaikanal1,
      },
      {
        id: 12,
        name: 'Silver Oak Hotel',
        distance: '1km from Coaker\'s Walk',
        taxiOp: 'Free airport taxi',
        subtitle: 'Elegant Hotel with Scenic Gardens',
        features: '2 bedrooms, 2 bathrooms, 80m²',
        cancelOp: 'Free cancellation',
        price: '₹6,500',
        destination: 'Kodaikanal',
        img: assets.kodaikanal2,
      },
      {
        id: 13,
        name: 'Sunny Hills Inn',
        distance: '2km from Bryant Park',
        taxiOp: 'Free airport taxi',
        subtitle: 'Inn Surrounded by Nature',
        features: '3 bedrooms, 3 bathrooms, 120m²',
        cancelOp: 'Free cancellation',
        price: '₹9,000',
        destination: 'Kodaikanal',
        img: assets.kodaikanal3,
      },
      {
        id: 14,
        name: 'Royal Kodaikanal Hotel',
        distance: '1.5km from Kodai International School',
        taxiOp: 'Free airport taxi',
        subtitle: 'Luxury Hotel with Spa Services',
        features: '1 bedroom, 1 bathroom, 45m²',
        cancelOp: 'Free cancellation',
        price: '₹8,500',
        destination: 'Kodaikanal',
        img: assets.kodaikanal4,
      },
      {
        id: 15,
        name: 'Kodaikanal Valley Hotel',
        distance: '3km from Pillar Rocks',
        taxiOp: 'Free airport taxi',
        subtitle: 'Homely Hotel with Warm Hospitality',
        features: '2 bedrooms, 1 bathroom, 70m²',
        cancelOp: 'Free cancellation',
        price: '₹5,000',
        destination: 'Kodaikanal',
        img: assets.kodaikanal5,
      },
  ];

  const filteredHotels = hotels.filter((hotel) =>
    hotel.destination.toLowerCase() === destination.toLowerCase()
  );

  return (
    <>
      <div className='listContainer'>
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsSearchItem">
              <label className='lab0'>Destination</label>
              <input
                type='text'
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="lsSearchItem">
  <label className='lab0'>Check-in Date</label>
  <span onClick={() => setOpenDate(!openDate)}>
    {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
  </span>
  {openDate && (
    <DateRange
      onChange={(item) => setDate([item.selection])}
      minDate={new Date()}
      ranges={date}
    />
  )}
</div>

            <div className="lsSearchItem">
              <label className='lab'>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className='lsOptionText'>Min price <small>per night</small></span>
                  <input type="text" className="lsSearchOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className='lsOptionText'>Max price <small>per night</small></span>
                  <input type="text" className="lsSearchOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className='lsOptionText'>Adults</span>
                  <input type="number" min={1} className="lsSearchOptionInput" placeholder={option.adults} />
                </div>

                <div className="lsOptionItem">
                  <span className='lsOptionText'>Children</span>
                  <input type="number" min={0} className="lsSearchOptionInput" placeholder={option.children} />
                </div>

                <div className="lsOptionItem">
                  <span className='lsOptionText'>Rooms</span>
                  <input type="number" min={1} className="lsSearchOptionInput" placeholder={option.rooms} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <SearchItem key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <p>No hotels found for the selected destination.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
import "./Hotel.css";
import { assets } from "../../assets/assets";
import Header from "../../Components/Header/Header";
import Email from "../../Components/Email/Email";
import Footer from "../../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: assets.ihcl1,
    },
    {
      src: assets.ihcl2,
    },
    {
      src: assets.ihcl3,
    },
    {
      src: assets.ihcl4,
    },
    {
      src: assets.ihcl5,
    },
    {
      src: assets.ihcl6,
    },
  ];

  return (
    <div>
      <Header />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Savoy Ooty, IHCL</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located just a 5-minute walk from the scenic Ooty Lake, Tower Street Apartments offers cozy accommodations with air conditioning and complimentary WiFi. The units feature beautiful wooden flooring and come with a fully equipped kitchenette, including a microwave, flat-screen TV, and a private bathroom with a shower and hairdryer. A refrigerator, electric kettle, and coffee maker are also provided for your convenience.

                Popular attractions near the apartment include the Botanical Gardens, Doddabetta Peak, and the Nilgiri Mountain Railway. The nearest airport is Coimbatore International Airport, approximately 85 km from Tower Street Apartments. The property also offers a paid airport shuttle service for easy transfers.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹8945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Email />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

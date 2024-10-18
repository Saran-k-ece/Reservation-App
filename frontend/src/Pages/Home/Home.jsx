import React from 'react'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import './Home.css'
import PropertyList from '../../Components/PropertyList/PropertyList'
import Email  from '../../Components/Email/Email'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
     <Header/>
     <div className="homecontainer">
      
      <div className='featured-heading'>
       <h1>Properties</h1>
       </div>
       <Featured/> 
       <div className="home-title">
        <h1>Browse by property type</h1>
       </div>
       <PropertyList />
       <Email />
       <Footer />
     </div>
    </div>
  )
}

export default Home

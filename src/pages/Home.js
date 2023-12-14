import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/images/dinner.jpg'

function Home() {
  return (
    <div className='home'style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer" >
            <h1>Khalifa's Restaurant</h1>
            <p>Satisfy your cravings!</p>

            <Link to='/menu'>
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
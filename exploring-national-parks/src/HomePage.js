/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import React from 'react'
import Welcome from './HomePage/Components/Welcome'
import Buttons from './HomePage/Components/Buttons'
import Weather from './HomePage/Components/Weather';
import yosemite from './HomePage/Assets/yosemite.jpg';
import './Style/homepage.css'
import HighlightGallery from './HomePage/Components/HighlightGallery';
const HomePage = () => {
  return (
    // <Navbar/>
    <div className = "home-page main-component">
        {/* <h1>Test Hello</h1> */}
        <Welcome/>
        <HighlightGallery/>
        <Buttons/>
        <Weather/>
    </div>
  )
}

export default HomePage
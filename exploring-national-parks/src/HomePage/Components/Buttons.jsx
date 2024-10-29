/**
 * Renders the Buttons component.
 * @module Buttons
 * @memberof HomePage
 *
 * @returns {JSX.Element} The rendered Buttons component.
 */
import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
    function click () {
        console.log("clicked")
        // invoke a react link to the park search page
        window.location.href = "ParkSearch"
    }

    async function randPark() {
      try {
        const url = `https://developer.nps.gov/api/v1/parks?api_key=Y7kFnm6SP5SMQhkTvwUSgyjge9buj4DbjrkuV2S0&limit=471`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to fetch parks');
        }
        const parks = await response.json();
        const randomPark = parks.data[Math.floor(Math.random()*parks.data.length)];

        console.log(randomPark);
      } catch (error) {
        console.log('Error Fetching parks: ', error.message);
      }
    }

    return (
        <div className = "homepage-button-wrapper">
            <div className = "button-container">
                <p>Learn More About Parks</p> 
                <Link className="homepage-button" to='/ParkSearch'><button className="homepage-button">Park Search</button></Link>                    
            </div>
            <div className = "button-container">
                <p>Random Park!</p>
                <button className="homepage-button" onClick={randPark}>I'm feeling lucky!</button>
            </div>
            <div className = "button-container">
                <p>Plan A Trip To A National Park</p>
                <Link className="homepage-button" to='/ParkPlan'><button className="homepage-button">Plan a Trip</button></Link>
            </div>               
        </div>
    )
}

export default Buttons
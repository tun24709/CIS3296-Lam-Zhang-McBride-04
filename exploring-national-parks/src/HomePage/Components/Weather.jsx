import React, { useEffect, useState } from 'react';
import { FindParkWeather } from '../../ParkSearch/Functionality/FindParkWeather';

/**
 * Component that displays forecast
 * @module Weather
 * @memberof HomePage
 * @returns {JSX.Element} The rendered welcome section.
 */
const Weather = ({latitude, longitude}) => {
    const [weatherData, setWeatherData] = useState(null); //State for weather data
    const [error, setError] = useState(null); //State if we cannot retrieve weather(error)


    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await FindParkWeather(latitude, longitude);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchWeather();
    }, []); //dependency array makes sure we only change weather when we are asked for a different area

    return (
        <div className = "" style = {{backgroundColor: "#ffffff", color: "black"}}>
            <h1 className = "weather-title">Current Weather</h1>

            {weatherData !== null ?
                <p className="weather-text">
                    Displaying the weather for today
                    <p>Temperature: {weatherData.current.temp}°F</p>
                    <p>Humidity: {weatherData.current.humidity}%</p>
                    <p>Wind Speed: {weatherData.current.wind_speed} mph</p>
                </p>
                : <p>Weather could not be loaded: {error}</p>
            }

            <div>

            </div>
        </div>
    )
}
export default Weather;
import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // to fetch the lat and log

  function fetchCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  console.log(latitude);
  console.log(longitude);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
        );
        setWeather(response.data);
      } catch (error) {
        setError("Unable to fetch weather data.");
      }
    };
    // Call the function
    fetchWeather();
    fetchCurrentLocation();
  }, [latitude, longitude]);
  console.log(weather);

  if (!weather) {
    return <div className="weather-display">Loading...</div>;
  }

  return (
    <div className="weather-display">
      <h3>Weather Info</h3>
      <p>Current City Name: {weather.name}</p>
      <p>Temperature: {weather.main.temp}</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;

import { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import Loading from './Loading';

import styles from './WeatherApp.module.css';

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`;
  }, [weather]);

  async function loadInfo(city = 'london') {
    try {
      const apiKey = 'c6e97ae1a84040dcaeb143253221008';

      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?aqi=no&key=${apiKey}&q=${city}`
      );

      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

import { useEffect, useState } from "react";
import { APIKey } from "./weatherSerices/weatherService";
import { getWeatherIcon } from "./weatherSerices/iconLogic";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [error, setError] = useState("");

  const getWeatherData = () => {
    const apiData = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&units=Metric&appid=${APIKey}`
    );
    apiData
      .then((res) => {
        console.log(res, "ok");
        if (res.ok) {
          return res.json();
        } else {
          throw res.statusText;
          // console.log("err", res);
        }
      })
      .then((result) => {
        // console.log(result, "okh");
        setWeatherData(result);
        // console.log("result", result?.list?.[0]?.weather?.[0]?.icon);
        const icon = getWeatherIcon(result?.list?.[0]?.weather?.[0]?.icon);
        setWeatherIcon(icon);
      })
      .catch((err) => {
        setError(err);
      });

    setSearchInput("");

    // console.log("nnn", weatherData?.list?.[0]?.weather?.icon);
    // const icon = getWeatherIcon(weatherData?.list?.[0]?.weather?.icon);
    // console.log("icon", icon);
    // setWeatherIcon(icon);
  };

  // console.log("weatherData", weatherData);

  // useEffect(() => {
  //   const icon = getWeatherIcon(weatherData?.list[0]?.weather?.icon);
  //   console.log("icon", icon);
  //   setWeatherIcon(icon);
  // }, []);

  // if  (error) {
  //   return
  // }

  return (
    <>
      <h1>weather</h1>
      <input
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
      <button onClick={getWeatherData}>Search</button>
      {error && <p> {error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData?.city?.name}</h2>
          <p> humidity {weatherData?.list?.[0]?.main?.humidity}</p>
          <p> wind{weatherData?.list?.[0]?.wind?.speed}</p>
          <p> Temperature{weatherData?.city?.country}</p>
          <img src={weatherIcon}></img>
        </div>
      )}
    </>
  );
};

export default WeatherApp;

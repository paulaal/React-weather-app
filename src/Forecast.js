import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
	let [ready, setReady] = useState(false);
	let [forecast, setForecast] = useState(null);
	let [weatherIcon, setWeatherIcon] = useState(null);

	function handleResponse(response) {
		setForecast(response.data.daily);
		console.log(response.data.daily);
		setWeatherIcon(
			`http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
		);
		setReady(true);
	}

	if (ready) {
		return <WeatherForecastDay data={forecast[0]} icon={weatherIcon} />;
	} else {
		let lat = props.coord.lat;
		let lon = props.coord.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=523328191cb42f7e509a7d1cfe8f3757&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}

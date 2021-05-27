import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
	let [ready, setReady] = useState(false);
	let [forecast, setForecast] = useState(null);
	let [weatherIcon, setWeatherIcon] = useState(null);

	useEffect(() => {
		setReady(false);
	}, [props.coord]);

	function handleResponse(response) {
		setForecast(response.data.daily);

		setWeatherIcon(
			`http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
		);
		setReady(true);
	}

	if (ready) {
		return (
			<div className="row">
				{forecast.map(function (dailyForecast, index) {
					if ((index < 4) & (index > 0)) {
						return (
							<div className="row" key={index}>
								<WeatherForecastDay data={dailyForecast} icon={weatherIcon} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		let lat = props.coord.lat;
		let lon = props.coord.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=523328191cb42f7e509a7d1cfe8f3757&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}

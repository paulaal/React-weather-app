import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
	function maxTemperature() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}°`;
	}
	function minTemperature() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}°`;
	}
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[day];
	}
	return (
		<div className="WeatherForecastDay">
			<span className="row">
				<div className="col-6">
					<div className="day">{day()}</div>

					<span className="tempMax">{maxTemperature()} </span>
					<span className="tempMin">{minTemperature()}</span>
				</div>
				<div className="col-6">
					<span className="weatherIcon">
						<img
							src={props.icon}
							alt={props.data.weather[0].description}
							className="float-center"
						/>
					</span>
				</div>
			</span>
		</div>
	);
}

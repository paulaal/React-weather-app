import React from "react";

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
				<span className="col-6">
					<span className="day">{day()}</span>
					<span className="row">
						<span className="tempMax">{maxTemperature()}</span>
						<span className="tempMin">{minTemperature()}</span>
					</span>
				</span>
				<span className="col-6">
					<span className="weatherIcon">
						<img
							src={props.icon}
							alt={props.data.weather[0].description}
							className="float-center"
						/>
					</span>
				</span>
			</span>
		</div>
	);
}

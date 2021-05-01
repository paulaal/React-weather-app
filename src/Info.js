import React from "react";
import "./Info.css";
import FormattedDate from "./FormattedDate";

export default function Info(props) {
	return (
		<div className="Info">
			<h5 id="city_selected"> {props.data.name} </h5>
			<br />
			<p id="date-formatted">
				{" "}
				<FormattedDate date={props.data.date} />
			</p>
			<br />
			<p id="weatherDescription">Sunny</p>

			<div className="row">
				<div className="col-6">
					<p className="temperatureUnits">{props.data.temperature}°C</p>
				</div>
				<div className="col-6">
					<div className="HumidityWind">
						<div id="humidityID">
							Humidity: {props.data.humidity}% <br />
						</div>
						<div id="windID">Wind: {props.data.wind}km/h</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import "./Info.css";
import FormattedDate from "./FormattedDate";
import ConvertTemperature from "./ConvertTemperature";

export default function Info(props) {
	return (
		<div className="Info">
			<div className="city_selected"> {props.data.name} </div>
			<span id="date-formatted">
				{" "}
				<FormattedDate date={props.data.date} />
			</span>
			<span className="weatherDescription">{props.data.description}</span>
			<div className="row">
				<div className="col-6">
					<div className="weatherIcon">
						<img
							src={props.data.icon}
							alt={props.data.description}
							className="float-center"
						/>
					</div>
				</div>
				<div className="col-6">
					<p className="temperatureUnits">
						<ConvertTemperature temp={props.data.temperature} />
					</p>
				</div>
			</div>
			<div className="row">
				<div className="HumidityWind">
					<div id="humidityID">
						Humidity: {props.data.humidity}% <br />
					</div>
					<div id="windID">Wind: {props.data.wind}km/h</div>
				</div>
			</div>
		</div>
	);
}

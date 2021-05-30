import React, { useState, useEffect } from "react";
import "./Info.css";
import FormattedDate from "./FormattedDate";
import ConvertTemperature from "./ConvertTemperature";

export default function Info(props) {
	const [unit, setUnit] = useState("celsius");

	useEffect(() => {
		setUnit("Fah");
	}, [props.data.temperature]);

	if (unit === "celsius") {
		return (
			<div className="Info">
				<div className="city_selected"> {props.data.name} </div>
				<span id="date-formatted">
					{" "}
					<FormattedDate date={props.data.date} />
				</span>
				<span className="weatherDescription">{props.data.description}</span>
				<div className="row">
					<div className="col-4">
						<div className="weatherIcon">
							<img
								src={props.data.icon}
								alt={props.data.description}
								className="weatherMainIcon"
							/>
						</div>
					</div>

					<div className="col-8">
						<p className="temperatureUnits">
							<ConvertTemperature
								temp={props.data.temperature}
								unit={unit}
								setUnit={setUnit}
							/>
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
	} else {
		return (
			<div className="Info">
				<div className="city_selected"> {props.data.name} </div>
				<span id="date-formatted">
					{" "}
					<FormattedDate date={props.data.date} />
				</span>
				<span className="weatherDescription">{props.data.description}</span>
				<div className="row">
					<div className="col-4">
						<div className="weatherIcon">
							<img
								src={props.data.icon}
								alt={props.data.description}
								className="weatherMainIcon"
							/>
						</div>
					</div>

					<div className="col-8">
						<p className="temperatureUnits">
							<ConvertTemperature
								temp={props.data.temperature}
								unit={unit}
								setUnit={setUnit}
							/>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="HumidityWind">
						<div id="humidityID">
							Humidity: {props.data.humidity}% <br />
						</div>
						<div id="windID">
							Wind: {Math.round(props.data.wind * 0.621371)}mph
						</div>
					</div>
				</div>
			</div>
		);
	}
}

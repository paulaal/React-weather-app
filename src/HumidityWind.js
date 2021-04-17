import React from "react";
import "./HumidityWind.css";

export default function HumidityWind() {
	return (
		<div className="HumidityWind">
			<div id="humidityID">
				Humidity: 50% <br />
			</div>
			<div id="windID">Wind: 15km/h</div>
		</div>
	);
}

import React from "react";
import "./Info.css";

export default function Info() {
	return (
		<div className="Info">
			<h5 id="city_selected"> Madrid </h5>
			<br />
			<p id="weatherDescription">Sunny</p>
			<br />
			<p id="date-formatted"> Sunday 11:43</p>
		</div>
	);
}

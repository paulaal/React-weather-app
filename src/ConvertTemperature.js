import React, { useState } from "react";
import "./ConvertTemperature.css";

export default function ConvertTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function convertFah(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function convertCel(event) {
		event.preventDefault();
		setUnit("celsius");
	}
	if (unit === "celsius") {
		return (
			<span className="tempConversion">
				<span>{props.temp}</span>
				<span className="unit">
					°C|
					<a href="/" onClick={convertFah}>
						°F
					</a>
				</span>
			</span>
		);
	} else {
		return (
			<span className="tempConversion">
				<span> {Math.round((props.temp * 9) / 5 + 32)} </span>
				<span className="unit">
					<a href="/" onClick={convertCel}>
						°C
					</a>
					|°F
				</span>
			</span>
		);
	}
}

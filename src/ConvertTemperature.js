import React from "react";
import "./ConvertTemperature.css";

export default function ConvertTemperature(props) {
	function convertFah(event) {
		event.preventDefault();
		props.setUnit("fahrenheit");
	}

	function convertCel(event) {
		event.preventDefault();
		props.setUnit("celsius");
	}
	if (props.unit === "celsius") {
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

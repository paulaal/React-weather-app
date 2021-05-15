import React, { useState } from "react";

export default function ConvertTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function convertFah(event) {
		event.preventDefault();
		setUnit = "fahrenheit";
	}

	function convertCel(event) {
		event.preventDefault();
		setUnit = "celsius";
	}
	if (unit === "celsius") {
		return (
			<div className="tempConversion">
				<div>{props.temp}</div>
				<div>°C |</div>
				<a h ref="/" onClick={convertFah}>
					°F
				</a>
			</div>
		);
	} else {
		return (
			<div className="tempConversion">
				<div> {Math.round((props.temp * 9) / 5 + 32)} </div>
				<a href="/" onClick={convertCel}>
					°C |
				</a>
				<div>°F</div>
			</div>
		);
	}
}

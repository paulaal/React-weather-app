import "./App.css";
import Info from "./Info";
import CurrentLocation from "./CurrentLocation";
import Footer from "./Footer";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
	const [city, setCity] = useState("Madrid");
	const [info, setInfo] = useState({ ready: false });

	function displayInfo(response) {
		setInfo({
			ready: true,
			name: response.data.name,
			date: new Date(response.data.dt * 1000),
			temperature: Math.round(response.data.main.temp),
			humidity: Math.round(response.data.main.humidity),
			wind: Math.round(response.data.wind.speed),
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}d@2x.png"`,
			description: response.data.weather[0].description,
		});
	}
	function search() {
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=523328191cb42f7e509a7d1cfe8f3757&units=metric`;
		axios.get(apiUrl).then(displayInfo);
	}
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function updateCity(event) {
		setCity(event.target.value);
	}
	if (info.ready) {
		return (
			<div className="App">
				<div className="container">
					<section>
						<div className="row">
							<div className="col-7">
								<Info defaultCity="Madrid" data={info} />
							</div>
							<div className="col-5">
								<form className="SearchForm" onSubmit={handleSubmit}>
									<input
										id="search-city"
										type="search"
										placeholder="Enter name of the city"
										autoComplete="off"
										onChange={updateCity}
									/>
									<input type="submit" Value="Search" />
								</form>

								<CurrentLocation />
							</div>
						</div>
					</section>
					<Footer />
				</div>
			</div>
		);
	} else {
		search();
		return <div>Loading data...</div>;
	}
}

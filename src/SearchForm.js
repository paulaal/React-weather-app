import React from "react";

export default function SearchForm() {
	return (
		<form className="SearchForm">
			<strong>Search:</strong>{" "}
			<input
				id="search-city"
				type="text"
				name="city"
				placeholder="Enter name of the city"
				autoComplete="off"
			/>
		</form>
	);
}

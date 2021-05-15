import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<p className="footer">
			This project was coded by Paula Alcorta and is
			<a
				href="https://github.com/paulaal/weather-app"
				target="_blank"
				rel="noreferrer"
			>
				open-sourced on GitHub
			</a>
			and
			<a
				href="https://mystifying-snyder-b32fbd.netlify.app"
				target="_blank"
				rel="noreferrer"
			>
				hosted on Netlify
			</a>
		</p>
	);
}

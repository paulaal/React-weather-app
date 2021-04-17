import "./App.css";
import Info from "./Info";
import Icon from "./Icon";
import Temperature from "./Temperature";
import SearchForm from "./SearchForm";
import CurrentLocation from "./CurrentLocation";
import HumidityWind from "./HumidityWind";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<section>
				<div className="row">
					<div className="col-6">
						<Info />
						<div className="row">
							<div className="col-4">
								<Icon />
							</div>
							<div className="col-8">
								<Temperature />
							</div>
						</div>
					</div>
					<div className="col-6">
						<SearchForm />
						<CurrentLocation />
						<HumidityWind />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
export default App;

import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./Results";
import "./App.css";

const credentials =
	"client_id=KN2HV2PLGRIF032ZODTHGX5NVT0BG4IMGOXMDPB0UE0NZCBR&client_secret=43JQFMIN5HIESIL0FKIZD1UK3NLNSITE5EJ5JOIE2RKWJ25M";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			venues: [],
			location: "",
			query: ""
		};
	}

	componentDidMount() {
		this.getLocation();
	}

	getVenues = () => {
		let { location, query } = this.state;
		axios.get(`https://api.foursquare.com/v2/venues/search?ll=${location}&query=${query}&v=20181025&${credentials}`).then(venues => {
			this.setState({ venues: venues.data.response.venues });
		});
	};

	getLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(currentPosition => {
				let { latitude, longitude } = currentPosition.coords;
				this.setState(
					{
						location: `${latitude},${longitude}`
					},
					this.getLocation()
				);
			});
		} else {
			console.log("not supporting");
		}
	};

	queryHandler = event => {
		this.setState({
			query: event.target.value
		});
		this.getVenues();
	};

	render() {
		return (
			<div className="App">
				<SearchBar inputHandler={this.queryHandler} />
				<Results venues={this.state.venues} />
			</div>
		);
	}
}

export default App;

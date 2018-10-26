import React, { Component } from "react";

export default class Results extends Component {
	render() {
		let { venues } = this.props;
		return (
			<div>
                {/* {JSON.stringify(venues)} */}
				<ul>
				{ venues && venues.map((venue, key) => (
				<li key={key}>{venue.name}</li>
					))}
				</ul>
			</div>
		);
	}
}


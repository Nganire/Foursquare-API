import React, { Component } from "react";

export default class SearchBar extends Component {

	render() {
		return (
			<div>
				<form>
					<input onChange={this.props.inputHandler} type="text" name="name" />
				</form>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

export default class SearchBar extends Component {
	handleChange = (e) => {
		this.props.searchChange(e.target.value);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.bookSearch();
	};
	render() {
		return (
			<div className="ui segment inverted ">
				<form className="ui form" onSubmit={this.handleSubmit}>
					<label htmlFor="searchTerm">
						<b>Book Search</b>
					</label>
					<div className="ui fluid icon input">
						<input
							type="text"
							placeholder="Search..."
							//beacuse we want react to drive forward data and store data not HTML
							value={this.props.term}
							id="searchTerm"
							onChange={this.handleChange}
							// does make things easier as only need to change this to control the input
						/>
						<i className="search icon" />
					</div>
				</form>
			</div>
		);
	}
}

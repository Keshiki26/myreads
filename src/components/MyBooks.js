import React, { Component } from 'react';
import CurrentPage from './CurrentPage';
import { Link } from 'react-router-dom';

export default class myBooks extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: [],
	};

	componentDidUpdate(prevProps) {
		if (this.props.books !== prevProps.books) {
			this.setState({
				currentlyReading: this.props.books.filter(
					(book) => book.shelf === 'currentlyReading'
				),
			});
			this.setState({
				wantToRead: this.props.books.filter(
					(book) => book.shelf === 'wantToRead'
				),
			});
			this.setState({
				read: this.props.books.filter((book) => book.shelf === 'read'),
			});
		}
	}

	render() {
		return (
			<div className="ui inverted segment">
				<div className="ui inverted secondary menu">
					<Link to="/" className="active red item">
						<i className="large book icon" />
						MyBooks
					</Link>
					<div className="right menu">
						<Link to="/search" className="item">
							<i className="large search icon" />
							Search
						</Link>
					</div>
				</div>
				<CurrentPage
					dv={1}
					updateBooks={this.props.updateBooks}
					books={this.state.currentlyReading}
					title="Currently Reading"
				/>
				<CurrentPage
					dv={2}
					updateBooks={this.props.updateBooks}
					books={this.state.wantToRead}
					title="Want To Read"
				/>
				<CurrentPage
					dv={3}
					updateBooks={this.props.updateBooks}
					books={this.state.read}
					title="Read"
				/>
			</div>
		);
	}
}

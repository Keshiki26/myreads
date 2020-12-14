import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CurrentPage from './CurrentPage';
import { Button, Icon } from 'semantic-ui-react';

export default class Search extends Component {
	state = { searchTerm: '', books: [] };
	controlSearchChange = (searchTerm) => {
		this.setState({ searchTerm });
	};
	submitBookSearch = () => {
		this.props.bookSearch(this.state.searchTerm);
	};
	componentDidUpdate(prevProps) {
		if (this.props.books !== prevProps.books) {
			this.setState({ books: this.props.books });
		}
	}

	render() {
		return (
			<div className="ui segment">
				<div className="ui">
					<Link to="/myreads" className="active red white  item">
						<Button animated inverted color="red">
							<Button.Content hidden>
								<Icon name="arrow left" />My Books
							</Button.Content>
							<Button.Content visible>
								<Icon name="arrow left" />My Books
							</Button.Content>
						</Button>
					</Link>
				</div>
				<div className="ui inverted segment">
					<SearchBar
						bookSearch={this.submitBookSearch}
						term={this.state.searchTerm}
						searchChange={this.controlSearchChange}
					/>
					{this.props.searching === 'notfound' && (
						<div class="ui error message">
							<div class="header">No Books Found!</div>
							<p>Please try a different search term.</p>
						</div>
					)}
					<CurrentPage dv={4} updateBooks={this.props.updateBooks} books={this.state.books} title="Results" />
				</div>
			</div>
		);
	}
}

import React, { Component } from 'react';
import './CurrentPage.css';
import { Dropdown, Icon } from 'semantic-ui-react';

const options = [
	{
		key: 'move',
		text: (
			<span>
				<strong>Move</strong> to...
			</span>
		),
		disabled: true
	},
	{ value: 'currentlyReading', text: 'Currently Reading' },
	{ value: 'wantToRead', text: 'Want to Read' },
	{ value: 'read', text: 'Read' },
	{ value: 'none', text: 'None' }
];

class CurrentPage extends Component {
	handleChange = (e, { book, value }) => {
		if (value !== book) {
			this.props.updateBooks(book, value);
		}
	};
	titleShow = () => {
		if (this.props.books.length > 0) {
			return <h3 className="ui block header">{this.props.title}</h3>;
		}
	};

	render() {
		return (
			<div className="shelfs ui">
				{this.titleShow()}
				<div className="shelf ui">
					{this.props.books.map((book, index) => {
						return (
							<div className="shelf-book ui">
								<div className="book-settings">
									<img className="" src={book.imageLinks.thumbnail} alt={book.title} />
									<Icon name="big" className="circle-book-menu" options={options} trigger={<div />}>
										<Dropdown
											icon="caret down"
											trigger={<a />}
											book={book}
											onChange={this.handleChange}
											defaultValue={options[this.props.dv].value}
											className="DropDownSemantic"
											options={options}
										/>
									</Icon>
								</div>
								<p key={index}>{book.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
// 								<Dropdown className="book-options" trigger={trigger} options={options} />

export default CurrentPage;

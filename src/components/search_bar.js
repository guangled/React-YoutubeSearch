/*
* @Author: guangled
* @Date:   2017-03-08 20:36:36
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-14 00:26:54
*/
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return(
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

// another edition 
/*
		render() {
		return(
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => {
						this.setState({term: event.target.value});
						this.props.onSearchTermChange(event.target.value);
					}} />
			</div>
		)
	}
*/
}

export default SearchBar;
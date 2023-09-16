import React, { Component } from "react";
import "./search-panel.css";

interface SearchPanelProps {
	onUpdateSearch: (term: string) => void;
}

interface State {
	term: string;
}

class SearchPanel extends Component<SearchPanelProps, State> {
	constructor(props: SearchPanelProps) {
		super(props);
		this.state = {
			term: "",
		};
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};
	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Find an employee"
				value={this.state.term}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchPanel;

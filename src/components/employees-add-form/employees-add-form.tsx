import React, { Component, ChangeEvent, FormEvent } from "react";
import "./employees-add-form.css";

interface Props {
	addNewItem: (name: string, salary: any) => void;
}

interface State {
	name: string;
	salary: number | string;
	increase: boolean;
}

class EmployeesAddForm extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			salary: "",
			increase: false,
		};
	}

	onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name as keyof State;
		this.setState({
			[name]: e.target.value,
		} as unknown as Pick<State, keyof State>);
	};
	onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.props.addNewItem(this.state.name, this.state.salary);
		this.setState({
			name: "",
			salary: "",
		});
	};
	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Add a new employee</h3>
				<form className="add-form d-flex" onSubmit={this.onSubmit}>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="What's his name?"
						name="name"
						value={name}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="Salary in $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}
					/>

					<button type="submit" className="btn btn-outline-light">
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;

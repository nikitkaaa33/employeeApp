import React from "react";
import "./app-filter.css";

interface IAppFilter {
	name: "all" | "like" | "moreThan1000";
	label: string;
}

interface AppFilterProps {
	filter: "all" | "like" | "moreThan1000";
	onFilterSelect: (filter: "all" | "like" | "moreThan1000") => void;
}

const AppFilter: React.FC<AppFilterProps> = (props) => {
	const buttonsData: IAppFilter[] = [
		{ name: "all", label: "All employees" },
		{ name: "like", label: "For promotion" },
		{ name: "moreThan1000", label: "Salary over 1000" },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light";
		return (
			<button
				className={`btn ${clazz}`}
				type="button"
				key={name}
				onClick={() => props.onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;

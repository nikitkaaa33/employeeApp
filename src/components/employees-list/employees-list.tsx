import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

interface DataItem {
	id: number;
	name: string;
	salary: number;
}

interface EmployeeListProps {
	data: DataItem[];
	onDelete: (id: number) => void;
	onToggleProp: (id: number, attribute: string) => void;
}

const EmployeesList: React.FC<EmployeeListProps> = ({
	data,
	onDelete,
	onToggleProp,
}) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				increase={false}
				like={false}
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) =>
					onToggleProp(
						id,
						e.currentTarget.getAttribute("data-toggle")
					)
				}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;

import React from "react";
import "./app-info.css";

type AppInfoProps = {
	increased: number;
	employees: number;
};

const AppInfo: React.FC<AppInfoProps> = ({ increased, employees }) => {
	return (
		<div className="app-info">
			<h1>Accounting for employees in the company </h1>
			<h2>Total number of employees: {employees} </h2>
			<h2>The award will be given to: {increased} </h2>
		</div>
	);
};

export default AppInfo;

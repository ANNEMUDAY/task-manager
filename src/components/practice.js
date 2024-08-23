// Run.js
import React from "react";

function Run() {
	const prac = () => {
		let x = "nameuday";
		return (
			<>
				<h1>{x}</h1>
			</>
		);
	};

	return <div>{prac()}</div>;
}

export default Run;

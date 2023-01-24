import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProjectsComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name].content;


	return (
		<div className="p-10">
			<ol className="list-disc">
				{values.map((item) => (
					<li className="m-2">
						{item.name}
						<a
							href={item.link}
							className="text-indigo-600 mx-2"
							target="_blank"
						>
							Link
						</a>
					</li>
				))}
			</ol >
		</div>
	);
};
export default ProjectsComponent;


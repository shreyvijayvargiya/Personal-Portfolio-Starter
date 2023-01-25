import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProjectsComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name].content;


	return (
		<div className="p-10 text-left w-full">
			<div className="flex justify=start items-center gap-2 pb-2 border-b border-gray-800">
				<img src="./images/projects.png" className="w-6 h-6 rounded-sm" />
				<p className="text-2xl">Projects</p>
			</div>
			<ol className="list-disc p-10">
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
			</ol>
		</div>
	);
};
export default ProjectsComponent;


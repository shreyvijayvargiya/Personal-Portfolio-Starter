import React, { useState } from "react";
import { useSelector } from "react-redux";

const WorkExperienceComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name]?.content;

	console.log(values)
	return (
		<div className="p-10 text-left w-full">
			<div className="flex justify=start items-center gap-2 pb-2 border-b border-gray-800">
				<img src="./images/workExperience.png" className="w-6 h-6 rounded-sm" />
				<p className="text-2xl">Work Experience</p>
			</div>
			<div className="p-10">
				{values.content && values.content.map((item) => (
					<div
						key={item.name}
						className="border border-gray-800 dark:border-gray-600 dark:text-white rounded-md"
					>
						<div className="flex justify-between items-center p-2">
							<p>{item.name}</p>
							<p className="text-xs italic text-gray-500">{item.date}</p>
						</div>
						<hr />
						<p className="p-4">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default WorkExperienceComponent;

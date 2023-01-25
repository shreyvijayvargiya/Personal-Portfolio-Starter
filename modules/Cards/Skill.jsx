import React from "react";
import { useSelector } from "react-redux";

const SkillsComponent = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["skills"]?.content;

	return (
		<div className="p-10 text-left w-full">
			<div className="flex justify=start items-center gap-2 pb-2 border-b border-gray-800">
				<img src="./images/skills.png" className="w-6 h-6 rounded-sm" />
				<p className="text-xl">Skills</p>
			</div>
			<ol className="list-disc px-10 py-5">
				{values && values.length > 0 && values?.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ol>
		</div>
	);
};

export default SkillsComponent;

import React from "react";
import { useSelector } from "react-redux";

const SkillsComponent = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["skills"]?.content;

	return (
		<div className="grid grid-cols-2 items-center gap-2  p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full">
			<div className="p-2">
				<img src="./images/skills.png" className="w-20 h-20 rounded-sm" />
				<p className="text-5xl">Skills</p>
			</div>
			<ol className="list-disc px-10 py-5 border border-gray-800 rounded-md">
				{values &&
					values.length > 0 &&
					values?.map((item) => <li key={item}>{item}</li>)}
			</ol>
		</div>
	);
};

export default SkillsComponent;

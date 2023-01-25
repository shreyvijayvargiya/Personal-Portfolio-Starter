import React, { useState } from "react";
import { useSelector } from "react-redux";

const SkillsComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name].content;

	return (
		<div className="p-10 text-left w-full">
			<div className="flex justify=start items-center gap-2 pb-2 border-b border-gray-800">
				<img src="./images/skills.png" className="w-6 h-6 rounded-sm" />
				<p className="text-xl">Skills</p>
			</div>
			<ol className="list-disc p-10">
				{values.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		</div>
	);
};

export default SkillsComponent;

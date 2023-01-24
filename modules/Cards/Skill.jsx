import React, { useState } from "react";
import { useSelector } from "react-redux";

const SkillsComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name].content;

	return (
		<div className="p-10">
      <ol className="list-disc">
        {values.map(item => (
          <li>{item}</li>
        ))}
      </ol>
		</div>
	);
};

export default SkillsComponent;

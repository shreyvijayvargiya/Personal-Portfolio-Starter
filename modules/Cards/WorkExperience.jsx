import React, { useState } from "react";
import { useSelector } from "react-redux";

const WorkExperienceComponent = ({ name }) => {
  const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name];

	const html = `<div>${values.content}</div>`;

  return (
		<div className="p-10">
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};
export default WorkExperienceComponent;
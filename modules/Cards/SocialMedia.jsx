import { RenderIconComponent } from "modules/Icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SocialMediaComponent = ({ name }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData[name].content;

	return (
		<div className="p-10">
			<div>
				{values.map((item) => (
					<a href={item.link} target="_blank" className="m-2 flex justify-start items-center gap-1">
            <RenderIconComponent name={item.name} />
            <p>{item.name}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialMediaComponent;

import React, { useState } from "react";
import { useSelector } from "react-redux";

const WorkExperienceComponent = ({ removeLeftIcon }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["workExperience"]?.content;
	return (
		<div className="grid md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 items-center gap-2 p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full">
			{!removeLeftIcon && (
				<div className="p-2">
					<img
						src="./images/workExperience.png"
						className="w-20 h-20 rounded-sm"
					/>
					<p className="text-5xl">Work Experience</p>
				</div>
			)}
			<div className="py-5">
				{values &&
					values.length > 0 &&
					values?.map((item) => (
						<div
							key={item.name}
							className="border border-gray-800 dark:border-gray-600 dark:text-white rounded-md my-4 hover:bg-gray-800"
						>
							<div className="flex justify-between items-center p-2 border-b border-gray-700">
								<p>{item.name}</p>
								<p className="text-xs italic text-gray-500">{item.date}</p>
							</div>
							<p className="p-4">{item.content}</p>
						</div>
					))}
			</div>
		</div>
	);
};
export default WorkExperienceComponent;

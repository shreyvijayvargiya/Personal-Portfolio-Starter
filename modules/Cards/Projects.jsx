import React from "react";
import { useSelector } from "react-redux";

const ProjectsComponent = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["projects"].content;

	return (
		<div className="grid md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 items-center gap-2 p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full">
			<div className="p-2">
				<img src="./images/projects.png" className="w-20 h-20 rounded-sm" />
				<p className="text-5xl">Projects</p>
			</div>
			<ol className="list-disc px-10 py-5 border border-gray-800 rounded-md">
				{values &&
					values.length > 0 &&
					values.map((item) => (
						<li className="m-2" key={item.name}>
							{item?.name}
							<a
								href={item?.link}
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


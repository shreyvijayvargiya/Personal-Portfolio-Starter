import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	WorkExperienceComponent,
	SkillsComponent,
	ProjectsComponent,
	SocialMediaComponent,
} from "modules";

const Home = () => {
	const { user: data } = useSelector((state) => state);
	const values = data.defaultPortfolioData;
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<div className="md:w-2/6 mx-auto sm:w-2/5 xs:w-full xxs:w-full">
				<img
					src="./images/avatar.png"
					className="w-40 h-40 rounded-full mx-auto"
				/>
				<p className="text-xl ">{values.heading}</p>
				<p>{values.description}</p>
				<br />
				<button className="bg-indigo-600 rounded-md hover:bg-indigo-700 border p-3 dark:border-black text-white text-bold shadow-xl">
					<a href={values.contactDetails.content[0].link} target="_blank">
						Hire me
					</a>
				</button>
			</div>
			<div className="md:w-3/5 mx-auto sm:w-full xxs:w-full xs:w-full">
				<WorkExperienceComponent name="workExperience" />
				<ProjectsComponent name="projects" />
				<SkillsComponent name="skills" />
				<SocialMediaComponent name="socialMedia" />
			</div>
		</div>
	);
};
export default Home;

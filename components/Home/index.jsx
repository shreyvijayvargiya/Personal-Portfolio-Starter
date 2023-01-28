import React from "react";
import { useSelector } from "react-redux";
import {
	WorkExperienceComponent,
	SkillsComponent,
	ProjectsComponent,
	SocialMediaComponent,Divider
} from "modules";


const Home = () => {
	const { user: data } = useSelector((state) => state);
	const values = data?.defaultPortfolioData;
	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<div className="md:w-2/6 mx-auto sm:w-2/5 xs:w-full xxs:w-full text-center">
				<img
					src="./images/avatar.png"
					className="w-60 h-60 rounded-full mx-auto"
				/>
				<div className="my-4">
					<p className="text-7xl my-4">{values.heading}</p>
					<p className="md:w-3/5 sm:w-full xxs:w-full xs:w-full mx-auto">
						{values?.description}
					</p>
				</div>
				<button className="bg-indigo-600 rounded-md hover:bg-indigo-700 border p-3 dark:border-black text-white text-bold shadow-xl">
					<a href={values?.contactDetails?.content[0]?.link} target="_blank">
						Let's talk
					</a>
				</button>
			</div>
			<div>
				<Divider />
				<WorkExperienceComponent />
				<Divider />
				<ProjectsComponent />
				<Divider />
				<SkillsComponent />
				<Divider />
				<SocialMediaComponent />
			</div>
		</div>
	);
};
export default Home;

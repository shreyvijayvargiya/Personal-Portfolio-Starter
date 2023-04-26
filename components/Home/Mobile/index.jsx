import React from "react";
import { useSelector } from "react-redux";
import {
	WorkExperienceComponent,
	SkillsComponent,
	ProjectsComponent,
	SocialMediaComponent,
	Divider,
} from "modules";


const MobileHome = () => {
	const { user: data } = useSelector((state) => state);
	const values = data?.defaultPortfolioData;

	return (
		<div className="flex flex-col justify-center items-center gap-4">
			<div className="md:w-2/6 mx-auto sm:w-2/5 xs:w-full xxs:w-full text-center h-screen flex flex-col justify-center items-center">
				<img
					src="./images/avatar.png"
					className="w-60 h-60 rounded-full mx-auto"
				/>
				<div className="my-4">
					<p className="text-8xl my-4">{values.heading}</p>
					<p className="text-xl md:w-4/5 sm:w-full xxs:w-full xs:w-full mx-auto">
						{values?.description}
					</p>
					<p className="text-sm md:w-4/5 sm:w-full xxs:w-full xs:w-full mx-auto">
						{values?.caption}
					</p>
				</div>
				<a
					className="py-2 px-10 border-2 border-black dark:bg-gray-50 dark:hover:bg-gray-100 dark:text-black rounded-md hover:border-none hover:bg-gray-900 hover:text-white"
					href="/projects"
				>
					Projects
				</a>
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
export default MobileHome;

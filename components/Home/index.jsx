import React from "react";
import { useSelector } from "react-redux";
import {
	WorkExperienceComponent,
	SkillsComponent,
	ProjectsComponent,
	SocialMediaComponent,Divider
} from "modules";
import { DownArrow } from "modules/Icons";

const Home = () => {
	const { user: data } = useSelector((state) => state);
	const values = data?.defaultPortfolioData;

	const scrollToDown = React.useCallback(() => {
		if(typeof window !== "undefined"){
			window.scrollBy({ top: 800, left:0, behavior: "smooth" })
		}
	}, [ ]);

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
				<div className="text-center cursor-pointer w-fit hover:bg-gray-100 rounded-md p-2 dark:hover:bg-gray-800" onClick={scrollToDown}>
					<p className="text-xs text-gray-500">Read more </p>
					<DownArrow />
				</div>
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

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@mantine/core";
import { WorkExperienceComponent, SkillsComponent, ProjectsComponent, SocialMediaComponent } from "modules";

const Home = () => {

	const { user: data } = useSelector((state) => state);
	const [opened, setOpened] = useState(false);
	const [modalData, setData] = useState({
		name: "",
		title: "",
	});
	const values = data.defaultPortfolioData;

	const openModal = (name, title) => {
		setData({ name: name, title: title });
		setOpened(true);
	};

	return (
		<div className="flex flex-col justify-center items-center gap-4 mx-auto text-center">
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
			<div className="grid md:grid-cols-4 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 gap-4 text-black p-10 md:w-auto sm:w-full xxs:w-full xs:w-full">
				<div
					className="border border-black bg-yellow-200 p-8 rounded-md cursor-pointer shadow-2xl hover:bg-yellow-300"
					onClick={() => openModal("workExperience", "Work Experience")}
				>
					<img
						src="./images/workExperience.png"
						className="w-10 h-10 rounded-md mx-auto"
					/>
					<p className="text-xl">Work Experience</p>
				</div>
				<div
					className="border border-black bg-indigo-200 p-8 rounded-md cursor-pointer shadow-2xl hover:bg-indigo-300"
					onClick={() => openModal("projects", "Projects")}
				>
					<img
						src="./images/projects.png"
						className="w-10 h-10 rounded-md mx-auto"
					/>
					<p>Projects</p>
				</div>
				<div
					className="border border-black bg-pink-200 p-8 rounded-md cursor-pointer shadow-2xl hover:bg-pink-300"
					onClick={() => openModal("skills", "Skills")}
				>
					<img
						src="./images/skills.png"
						className="w-10 h-10 rounded-md mx-auto"
					/>
					<p>Skills</p>
				</div>
				<div
					className="border border-black bg-green-200 p-8 rounded-md cursor-pointer shadow-2xl hover:bg-green-300"
					onClick={() => openModal("socialMedia", "Social Media")}
				>
					<img
						src="./images/socialMedia.png"
						className="w-10 h-10 rounded-md mx-auto"
					/>
					<p>Social Media</p>
				</div>
			</div>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title={modalData.title}
				classNames={{ root: "dark:bg-gray-900 dark-text-gray-100", header: "p-6 mb-0", modal: "p-0", title: "text-2xl font-semibold" }}
			>
				<div>
					<hr />
					{modalData?.name === "workExperience" && (
						<WorkExperienceComponent name={modalData.name} />
					)}
					{modalData?.name === "projects" && (
						<ProjectsComponent name={modalData.name} />
					)}
					{modalData?.name === "skills" && (
						<SkillsComponent name={modalData.name} />
					)}
					{modalData?.name === "socialMedia" && (
						<SocialMediaComponent name={modalData.name}  />
					)}
				</div>
			</Modal>
		</div>
	);
};
export default Home;

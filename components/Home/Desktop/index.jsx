import React, { useState } from "react";
import {
	Divider,
	WorkExperienceComponent,
	SkillsComponent,
	SocialMediaComponent,
	ProjectsComponent,
} from "modules";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import colors from "tailwindcss/colors";
import { DiPython, DiJava, DiReact, DiJavascript1, DiHtml5 } from "react-icons/di";
import { FileIconByName } from "modules/Icons";

const DesktopHome = () => {
	const { user: data } = useSelector((state) => state);
	const values = data?.defaultPortfolioData;
	const [activeFile, setActiveFile] = useState("AboutMe.java");
	const [activeFiles, setActiveFiles] = useState(["AboutMe.java"]);

	const handleFileClick = (name) => {
		let activeFilesCopy = [...activeFiles];
		setActiveFile(name);
		if (!activeFilesCopy.includes(name)) {
			activeFilesCopy.push(name);
		}
		setActiveFiles(activeFilesCopy);
	};

	
	return (
		<div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-900 text-gray-400 dark:text-gray-400">
			<div className="fixed top-0 left-0 bottom-0 border-r border-gray-800 text-gray-400 w-1/5 flex flex-col justify-between items-start">
				<div className="w-full">
					<div
						className="p-2 border-b border-gray-800 flex justify-start gap-1 items-center w-full"
						onClick={() => {}}
					>
						<img src="./images/avatar.png" className="w-10 h-10 rounded-full" />
						<p className="text-md font-semibold">Shrey vijayvargiya</p>
					</div>
					<div className="w-full text-left text-black">
						<div
							className={`${
								activeFile === "AboutMe.java"
									? "bg-gray-800 text-gray-200"
									: "bg-transparent"
							} p-2 cursor-pointer hover:bg-gray-800 flex justify-start gap-1 items-center`}
							onClick={() => handleFileClick("AboutMe.java")}
						>
							<FileIconByName name="AboutMe.java" />
							<p>AboutMe.java</p>
						</div>
						<div
							className={`${
								activeFile === "WorkExperience.html"
									? "bg-gray-800 text-gray-200"
									: "bg-transparent"
							} p-2 cursor-pointer hover:bg-gray-800 flex justify-start gap-1 items-center`}
							onClick={() => handleFileClick("WorkExperience.html")}
						>
							<DiHtml5 size={22} color={colors.pink[400]} />
							<p>WorkExperience.html</p>
						</div>
						<div
							className={`${
								activeFile === "Projects.jsx"
									? "bg-gray-800 text-gray-200"
									: "bg-transparent"
							} p-2 cursor-pointer hover:bg-gray-800 flex justify-start gap-1 items-center`}
							onClick={() => handleFileClick("Projects.jsx")}
						>
							<DiReact size={22} color={colors.blue[400]} />
							<p>Projects.jsx</p>
						</div>
						<div
							className={`${
								activeFile === "skills.js"
									? "bg-gray-800 text-gray-200"
									: "bg-transparent"
							} p-2 cursor-pointer hover:bg-gray-800 flex justify-start gap-1 items-center`}
							onClick={() => handleFileClick("skills.js")}
						>
							<DiJavascript1 size={22} color={colors.yellow[400]} />
							<p>Skills.js</p>
						</div>
						<div
							className={`${
								activeFile === "SocialLinks.py"
									? "bg-gray-800 text-gray-200"
									: "bg-transparent"
							} p-2 cursor-pointer hover:bg-gray-800 flex justify-start gap-1 items-center`}
							onClick={() => handleFileClick("SocialLinks.py")}
						>
							<DiPython size={22} color={colors.orange[400]} />
							<p>SocialLinks.py</p>
						</div>
					</div>
				</div>
				<div className="w-full px-2">
					<button className="bg-indigo-600 rounded-md hover:bg-indigo-700 dark:border p-3 dark:border-black text-white text-bold shadow-xl my-2 mx-0">
						<a
							href="https://mailtoshreyvijayvargiya26@gmail.com"
							target="_blank"
						>
							Let's talk
						</a>
					</button>
				</div>
			</div>
			<div className="fixed right-0 top-0 bottom-0 md:w-4/5 left-1/5">
				{activeFiles.length > 0 && (
					<div className="border-b border-gray-800 flex justify-start items-center w-full">
						{activeFiles.map((item) => {
							return (
								<div
									className={`${
										activeFile === item
											? "bg-gray-800 text-gray-200"
											: "bg-transparent"
									} p-4 cursor-pointer hover:bg-gray-800 flex justify-around items-center gap-4 border-r border-gray-800`}
									onClick={() => handleFileClick(item)}
								>
									<FileIconByName name={item} />
									<p>{item}</p>
									<div
										onClick={(e) => {
											e.stopPropagation();
											if (item == activeFile && activeFiles.length === 1) {
												setActiveFile("");
											} else if (
												item === activeFile &&
												activeFiles.length > 1
											) {
												setActiveFile(
													activeFiles[activeFiles.indexOf(item) - 1]
												);
											}
											setActiveFiles(
												activeFiles.filter((file) =>
													file !== item ? true : false
												)
											);
										}}
									>
										<AiOutlineClose size={12} color={colors.gray[400]} />
									</div>
								</div>
							);
						})}
					</div>
				)}
				<div className="overflow-y-scroll">
					{!activeFile && <div className="w-full h-screen flex justify-center items-center">Welcome to Shrey's Portfolio</div>}
					{activeFile === "AboutMe.java" && (
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
					)}
					{activeFile === "WorkExperience.html" && (
						<WorkExperienceComponent removeLeftIcon />
					)}
					{activeFile === "Projects.jsx" && (
						<ProjectsComponent removeLeftIcon />
					)}
					{activeFile === "skills.js" && <SkillsComponent removeLeftIcon />}
					{activeFile === "SocialLinks.py" && (
						<SocialMediaComponent removeLeftIcon />
					)}
				</div>
			</div>
		</div>
	);
};
export default DesktopHome;

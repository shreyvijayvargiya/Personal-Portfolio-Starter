import React, { useState } from "react";
import router from "next/router";
import Web3WalletRecoveryApp from "projects/Web3WalletRecoveryApp";
import FindJobsPortals from "projects/FindJobsPortals";
import IHateReadingLogs from "projects/iHateReadingLogs";
import IHateReading from "projects/iHateReading";
import BloggingWebsiteStarterKit from "projects/BloggingWebsiteStarterKit";
import SearchCurrency from "projects/SearchCurrency";
import DragDropDemo from "projects/DragDropDemo";
import ReactNativeBottomSheetDemo from "projects/ReactNativeBottomSheet";
import GithubApiDemo from "projects/GithubAPIDemo";
import WebCodeEditor from "projects/WebCodeIDE";

const ProjectComponent = () => {
	const [activeId, setActiveId] = useState(router.query.id);
	const projectList = [
		{
			id: 4,
			name: "iHateReading",
		},
		{
			id: 2,
			name: "Find Jobs Portals",
		},
		{
			id: 10,
			name: "Web Code Editor",
		},
		{
			id: 3,
			name: "iHateReading Logs",
		},
		{
			id: 1,
			name: "Web3 Wallet Recovery App",
		},
		{
			id: 5,
			name: "Ultimate blog website starter kit",
		},
		{
			id: 6,
			name: "Search & Filter currency API ",
		},
		{
			id: 7,
			name: "Drag Drop Demo",
		},
		{
			id: 8,
			name: "React Native Bottom Sheet Demo",
		},
		{
			id: 9,
			name: "Github API Demo",
		},
	];

	return (
		<div className="w-full">
			<div className="fixed w-1/5 overflow-scroll h-screen py-4">
				<br />
				<a
					className="text-bold text-xl flex justify-start items-center p-4"
					href="/projects"
				>
					Projects
				</a>
				<hr />
				<div className="flex flex-col justify-start items-start gap-1 p-4">
					{projectList &&
						projectList.length > 0 &&
						projectList.map((item) => {
							return (
								<a
									href={`/projects/${item.id}/${item.name.replaceAll(
										" ",
										"-"
									)}`}
									key={item.id}
									className="hover:underline hover:text-indigo-600 text-indigo-500"
								>
									{item.name}
								</a>
							);
						})}
				</div>
			</div>
			<div className="w-4/5 absolute p-14 right-0 top-10 flex flex-col justify-start items-start bg-gray-50 h-screen">
				{router.query.id === undefined && (
					<div>
						<p className="text-xl">Welcome to Shrey vijayvargiya's projects</p>
						<p>Click the project in sidebar to view the details</p>
					</div>
				)}
				{router.query.id == 1 && <Web3WalletRecoveryApp />}
				{router.query.id == 2 && <FindJobsPortals />}
				{router.query.id == 3 && <IHateReadingLogs />}
				{router.query.id == 4 && <IHateReading />}
				{router.query.id == 5 && <BloggingWebsiteStarterKit />}
				{router.query.id == 6 && <SearchCurrency />}
				{router.query.id == 7 && <DragDropDemo />}
				{router.query.id == 8 && <ReactNativeBottomSheetDemo />}
				{router.query.id == 9 && <GithubApiDemo />}
				{router.query.id == 10 && <WebCodeEditor />}
			</div>
		</div>
	);
};
export default ProjectComponent;

import React from "react";

const IHateReadingLogs = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">iHateReading Logs Repository</p>
			<p className="text-md">
				This repository consits øur website(iHateReading) articles threads code
				samples
			</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/iHateReadingLogs"
				target="_blank"
			>
				Github Repo
			</a>
			<p className="text-4xl">Documentation</p>
			<ol className="list-disc px-8">
				<li>TechLogs: Code concerning Frontend can be found inside it</li>
				<li>
					TechMobile: Code concerning to Mobile application development can be
					find inside it
				</li>
				<li>
					TechLogsBackend: Code concerning to Backend development can be found
					inside it
				</li>
			</ol>
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="https://github.com/shreyvijayvargiya/iHateReadingLogs"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default IHateReadingLogs;

import React from "react";

const DragDropDemo = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Drag Drop Demo </p>
			<p className="text-md">
				The purpose of the application is to provide realtime track generate
				platform.The platform has ability to generate tracks using drag and drop
				feature and save the track for the user
			</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/musiversalTask"
				target="_blank"
			>
				Github Repo
			</a>
			<br />
			<br />
			<p className="text-4xl">Project Instructions</p>
			<p>
				Instructions can be read{" "}
				<a
					href="https://github.com/musiversal/senior-frontend-challenge"
					target="_blank"
					className="text-indigo-500 hover:text-indigo-600 underline"
				>
					link
				</a>
			</p>
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="https://musiversal-task.vercel.app/"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default DragDropDemo;

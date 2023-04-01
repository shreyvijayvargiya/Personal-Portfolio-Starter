import React from "react";

const IHateReading = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">iHateReading </p>
			<p className="text-md">Learn how products are built</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/iHateReading"
				target="_blank"
			>
				Github Repo
			</a>
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="http://ihatereading.in/"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default IHateReading;

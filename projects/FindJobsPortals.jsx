import React from "react";

const FindJobsPortals = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Search Jobs Portals</p>
			<p className="text-md">Search your next jobs portals</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/findjobsportals"
				target="_blank"
			>
				Github Repo
			</a>
			<div>
        <p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="http://findjobsportals.vercel.app/"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default FindJobsPortals;

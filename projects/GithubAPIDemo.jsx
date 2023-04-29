import React from "react";

const GithubApiDemo = () => {
	return (
		<div>
			<p className="text-4xl">Github API Demo</p>
			<p className="text-md">
				Listed down the Pull requests and Issues of a public react repository
				using Github Ocktokit npm module{" "}
			</p>
			<br />
			<a
				href="https://github.com/shreyvijayvargiya/Github-API-Demo"
				target="_blank"
				className="text-indigo-500 hover:text-indigo-600 underline"
			>
				Github repo
			</a>
			<br />{" "}
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="https://github.com/shreyvijayvargiya/Github-API-Demo"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};

export default GithubApiDemo;


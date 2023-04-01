import React from "react";

const BloggingWebsiteStarterKit = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Ultimate blog website starter kit </p>
			<p className="text-md">
				Starter codebase to create personal blogging platform
			</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/Personal-Blog-Starter"
				target="_blank"
			>
				Github Repo
			</a>
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="https://personal-blog-starter.vercel.app/"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default BloggingWebsiteStarterKit;

import React from "react";

const WebCodeEditor = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Web Code Editor</p>
			<p className="text-md">Browser Code Editor just like Codesandbox</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/Web-Code-Editor"
				target="_blank"
			>
				Github Repo
			</a>
			<div>
				<p>Demo</p>
				<iframe
					width={1200}
					height={700}
					src="https://web-code-editor-sage.vercel.app/"
					className="border border-gray-400 rounded-md"
				/>
			</div>
		</div>
	);
};
export default WebCodeEditor;

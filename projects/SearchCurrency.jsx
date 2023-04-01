import React from "react";

const SearchCurrency = () => {
	return (
		<div className="text-black text-left">
			<p className="text-5xl">Search & Filter currency API </p>
			<p className="text-md">Searching & filtering currencies</p>
			<a
				className="underline text-indigo-500 hover:text-indigo-600 my-4"
				href="https://github.com/shreyvijayvargiya/SearchCurrency"
				target="_blank"
			>
				Github Repo
			</a>
      <br />
      <br />
			<p className="text-4xl">API's</p>
			<ol className="px-8 list-disc">
				<li>Search all currencies</li>
				<li>Search currency By Name</li>
				<li>Search currency By Code</li>
				<li>Search currency By Value</li>
			</ol>
			<br />
			<p className="text-md">Read the article for better understanding</p>
			<a
				href="https://shreyvijayvargiya26.medium.com/the-perfect-endpoints-for-filtering-currencies-in-88945e6a81c7"
				target="_blank"
				className="text-indigo-500 hover:text-indigo-600 underline"
			>
				Log to understand
			</a>
		</div>
	);
};
export default SearchCurrency;

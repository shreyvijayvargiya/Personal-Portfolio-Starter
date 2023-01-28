import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import router from "next/router";


const Navbar = () => {
	const { user } = useSelector((state) => state);
	const values = user?.defaultPortfolioData;

	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: user?.theme }));
	};

	return (
		<>
			<div className="fixed top-0 right-0 left-0 z-10 flex justify-between items-center w-full bg-white p-2 border-b dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
				<div className="flex justify-start gap-1 items-center">
					<img
						src="./images/avatar.png"
						className="w-10 h-10 rounded-full mx-2"
					/>
					<div
						className="text-sm cursor-pointer"
						onClick={() => router.push("/")}
					>
						{values?.name}
					</div>
				</div>
				<div>
					<button className="bg-indigo-600 rounded-md hover:bg-indigo-700 dark:border p-3 dark:border-black text-white text-bold shadow-xl">
						<a href={values?.contactDetails?.content[0]?.link} target="_blank">
							Let's talk
						</a>
					</button>
				</div>
			</div>
			<div className="flex justify-start gap-2 fixed bottom-5 right-5 z-10">
				<button
					onClick={toggle}
					className="py-2 text-xs px-2 border-black text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
				>
					Press T to toggle theme
				</button>
			</div>
		</>
	);
};
export default Navbar;

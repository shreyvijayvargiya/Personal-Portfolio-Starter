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

	console.log(user.theme, "theme")

	return (
		<div className="flex justify-between items-center w-full bg-gray-100 p-4 border-b dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex justify-start gap-1 items-center">
				<img
					src="./images/avatar.png"
					className="w-10 h-10 rounded-full mx-2"
				/>
				<div
					className="text-md cursor-pointer"
					onClick={() => router.push("/")}
				>
					{values?.name}
				</div>
			</div>
			<div className="flex justify-start gap-2">
				<button
					onClick={toggle}
					className="py-2 text-sm px-8 border-black text-gray-800 bg-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-100"
				>
					Press T to toggle theme
				</button>
			</div>
		</div>
	);
};
export default Navbar;

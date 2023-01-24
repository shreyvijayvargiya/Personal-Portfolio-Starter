import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import router from "next/router";
import { RenderIconComponent } from "modules/Icons";

const Navbar = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData;

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
				{values?.socialMedia &&
					(values?.socialMedia?.content).map((item) => (
						<a href={item.link} target="_blank" key={item.name}>
							<RenderIconComponent name={item.name} />
						</a>
					))}
			</div>
		</div>
	);
};
export default Navbar;

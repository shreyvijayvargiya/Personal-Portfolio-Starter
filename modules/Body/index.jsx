import React from "react";
import { Navbar } from "modules";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";
import router from "next/router";

const Body = ({ children }) => {
	const { user: data } = useSelector((state) => state);

	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: data.theme }));
	};

	return (
		<div
			className={`outline-none`}
			tabIndex="0"
			// onKeyDown={(e) => {
			// 	if (e.key === "t") {
			// 		toggle();
			// 	}
			// }}
		>
			{router.pathname.includes("/projects") ? (
				<div className="mobile-home sm:block xxs:block xs:block md:block xl:block">
					<Navbar />
					<div className="w-full text-center py-10 ">{children}</div>
				</div>
			) : (
				<div
					className={`${data.theme} text-center bg-white dark:bg-gray-900 dark:text-gray-100 outline-none h-auto`}
				>
					<div className="desktop-home sm:hidden xxs:hidden xs:hidden md:block xl:block">
						<div className="w-full text-center py-10 ">{children}</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Body;

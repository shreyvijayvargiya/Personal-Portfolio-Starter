import React from "react";
import { Navbar } from "modules";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "redux/slice/userSlice";

const Body = ({ children }) => {
	const { user: data } = useSelector((state) => state);

	const dispatch = useDispatch();

	const toggle = () => {
		dispatch(toggleTheme({ theme: data.theme }));
	};

	return (
		<div
			className={`${data.theme} outline-none`}
			tabIndex="0"
			onKeyDown={(e) => {
				if (e.key === "t") {
					toggle();
				}
			}}
		>
			<div className={`${data.theme} text-center bg-white dark:bg-gray-900 dark:text-gray-100 outline-none h-auto`}>
				<Navbar />
				<div className="w-full text-center py-10 ">
					{children}
				</div>
			</div>
		</div>
	);
};
export default Body;

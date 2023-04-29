import { RenderIconComponent } from "modules/Icons";
import React from "react";
import { useSelector } from "react-redux";

const SocialMediaComponent = ({ removeLeftIcon  }) => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["socialMedia"]?.content;

	return (
		<div className="grid md:grid-cols-2 sm:grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 items-center gap-2  p-10 text-left w-full md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full">
			{!removeLeftIcon && <div className="p-2">
				<img src="./images/socialMedia.png" className="w-20 h-20 rounded-sm" />
				<p className="text-5xl">Social Media</p>
			</div>}
			<div className="grid grid-cols-3 items-center px-10 py-5 border border-gray-800 rounded-md">
				{values &&
					values.length > 0 &&
					values.map((item) => (
						<a
							href={item?.link}
							key={item?.name}
							target="_blank"
							className="m-2 flex justify-start items-center gap-1 p-4 border border-gray-800 hover:border-gray-500 rounded-md"
						>
							<RenderIconComponent name={item?.name} />
							<p>{item?.name}</p>
						</a>
					))}
			</div>
		</div>
	);
};

export default SocialMediaComponent;

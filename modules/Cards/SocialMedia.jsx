import { RenderIconComponent } from "modules/Icons";
import React from "react";
import { useSelector } from "react-redux";

const SocialMediaComponent = () => {
	const { user } = useSelector((state) => state);
	const values = user.defaultPortfolioData["socialMedia"]?.content;

	return (
		<div className="p-10 text-left w-full">
			<div className="flex justify=start items-center gap-2 pb-2 border-b border-gray-800">
				<img src="./images/socialMedia.png" className="w-6 h-6 rounded-sm" />
				<p className="text-xl">Social Media</p>
			</div>
			<div className="px-10 py-5">
				{values && values.length > 0 && values.map((item) => (
					<a
						href={item?.link}
						key={item?.name}
						target="_blank"
						className="m-2 flex justify-start items-center gap-1"
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

import DesktopHome from "./Desktop";
import MobileHome from "./Mobile";

const Home = () => {
	return (
		<div className="w-full h-full">
			<div className="sm:hidden xxs:block xl:hidden md:hidden xxl:hidden xs:block">
				<MobileHome />
			</div>
			<div className="sm:hidden xxs:hidden xl:block md:block xxl:block xs:hidden">
				<DesktopHome />
			</div>
		</div>
	);
};
export default Home;

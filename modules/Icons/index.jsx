import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
	AiFillInstagram,
	AiOutlineArrowDown,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiCss3, DiJava, DiReact } from "react-icons/di";
import {
	VscJson,
	VscMarkdown,
} from "react-icons/vsc";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { SiGitignoredotio, SiGoland } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiPython } from "react-icons/di";
import colors from "tailwindcss/colors";

export const DownArrow = () => {
	return <AiOutlineArrowDown size={20} className="w-full text-center mx-auto dark:text-gray-200 my-2" />;
};
export const TwitterIcon = () => {
	return <AiFillTwitterCircle size={24} className="dark:text-gray-200" color={colors.blue[400]} />;
};

export const GithubIcon = () => {
	return <AiFillGithub size={24} className="dark:text-gray-200" color={colors.gray[400]} />;
};
export const LinkedInIcon = () => {
	return <AiFillLinkedin size={24} className="dark:text-gray-200" colo={colors.indigo[400]}  />;
};
export const DevToIcon = () => {
	return <FaDev size={24} className="dark:text-gray-200" color={colors.blueGray[400]} />;
};

export const YoutubeIcon = () => {
	return <AiFillYoutube size={24} className="dark:text-gray-200" color={colors.red[400]} />;
};

export const HashnodeIcon = () => {
	return <SiHashnode size={24} className="dark:text-gray-200" color={colors.cyan[400]} />;
};

export const InstagramIcon = () => {
	return <AiFillInstagram size={24} className="dark:text-gray-200" color={colors.pink[400]} />;
};

export const RenderIconComponent = ({ name }) => {
	if (name === "Twitter") {
		return <TwitterIcon />;
	} else if (name === "Github") return <GithubIcon />;
	else if (name === "LinkedIn") return <LinkedInIcon />;
	else if (name === "DevTo") return <DevToIcon />;
	else if (name === "Youtube") return <YoutubeIcon />;
	else if (name === "Hashnode") return <HashnodeIcon />;
	else if (name === "Instagram") return <InstagramIcon />;
	else return null;
};

export const FileIconByName = ({ name }) => {
	const ext = name?.split(".");
	if (ext[ext.length - 1] === "java")
		return <DiJava size={14} color={colors.red[400]} />;
	if (ext[ext.length - 1] === "js")
		return <SiJavascript size={14} color={colors.yellow[400]} />;
	else if (ext[ext.length - 1] === "jsx")
		return <DiReact size={14} color={colors.blue[400]} />;
	else if (ext[ext.length - 1] === "html")
		return <AiFillHtml5 size={14} color={colors.red[400]} />;
	else if (ext[ext.length - 1] === "css")
		return <DiCss3 size={14} color={colors.pink[400]} />;
	else if (ext[ext.length - 1] === "json" && name !== "package.json")
		return <VscJson size={14} color={colors.green[400]} />;
	else if (ext[ext.length - 1] === "md")
		return <VscMarkdown size={14} color={colors.gray[400]} />;
	else if (name === "package.json")
		return <IoLogoNodejs size={14} color={colors.green[400]} />;
	else if (ext[ext.length - 1] === "gitignore")
		return <SiGitignoredotio size={14} color={colors.pink[400]} />;
	else if (ext[ext.length - 1] === "py")
		return <DiPython size={14} color={colors.orange[400]} />;
	else if (ext[ext.length - 1] === "go")
		return <SiGoland size={14} color={colors.teal[400]} />;
	else return <BsCodeSlash size={14} color="gray" />;
};
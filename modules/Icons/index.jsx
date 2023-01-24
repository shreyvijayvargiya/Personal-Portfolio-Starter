import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

export const TwitterIcon = () => {
  return <AiFillTwitterCircle size={24} className="dark:text-gray-400" />;
};
export const GithubIcon = () => {
  return (
    <AiFillGithub size={24} className="dark:text-gray-400" />
  )
};
export const LinkedInIcon = () => {
  return <AiFillLinkedin size={24} className="dark:text-gray-400" />;
}

export const RenderIconComponent = ({ name }) => {
  if(name === "Twitter") { return <TwitterIcon /> }
  else if(name === "Github") return <GithubIcon />
  else if(name === "LinkedIn") return <LinkedInIcon />
  else return <TwitterIcon />
};

import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/" Icon={ImFacebook} />
    </div>
  );
};

export default ContactSocial;

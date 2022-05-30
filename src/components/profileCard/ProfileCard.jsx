import React from "react";
import avatar from "../../assets/avatar.png";
import myheader from "../../assets/myheader.jpeg";
import { FaRegEnvelope, FaGithub, FaTwitter, FaInstagram, FaRegBuilding, FaMapMarkerAlt, FaLink, FaLinkedin, FaRegMoon } from "react-icons/fa";

const ProfileCard = (props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg w-full sticky top-10 shadow-lg sm:w-[25rem] overflow-hidden">
      <div className="h-[150px] overflow-hidden">
        <img src={myheader} alt={myheader} className="w-full -translate-y-20" />
      </div>
      <div className="flex justify-end px-4 pt-4 relative">
        <img src={avatar} alt={avatar} className="rounded-full w-28 h-28 absolute top-[-40px] left-5 bg-white border-4 border-white" />
        <div className="flex gap-2">
          <a href="mailto:farhan@faruuhan.com" className="font-medium flex gap-2 items-center border-gray-400 border-[1px] rounded-full px-2 py-1 hover:bg-gray-100">
            <FaRegEnvelope className="text-[16px]" /> Hire Me
          </a>
          <button className="border border-gray-400 rounded-full p-2 hover:bg-gray-100 hidden">
            <FaRegMoon />
          </button>
        </div>
      </div>
      <div className="px-4 mt-6">
        <div>
          <p className="font-semibold font-['Inter'] text-[20px] text-black">Farhan Ramadhan</p>
          <p className="text-gray-600 font-['Inter']">@faruuhan</p>
        </div>
        <div className="text-black pt-3 font-['Inter'] leading-relaxed">
          <blockquote>Associate in Informatics Management | Jr. Front-End Developer | React.js</blockquote>
        </div>
        <div className="flex flex-col pt-3">
          <div className="flex gap-2 items-center text-gray-500">
            <FaRegBuilding /> <p className="font-['Inter']">Front-End Developer</p>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <FaMapMarkerAlt /> <p className="font-['Inter']">Bekasi, Indonesia</p>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <FaLink />
            <a href="https://drive.google.com/file/d/1aFrA2bBc3i9MembfohuQV_n-r4Mfl75n/view?usp=sharing" className="text-blue-600 font-['Inter'] hover:underline">
              View Curriculum Vitae
            </a>
          </div>
        </div>
        <div className="py-5 flex gap-5">
          <a href="https://github.com/faruuhan" className="hover:text-slate-900">
            <FaGithub className="text-[24px]" />
          </a>
          <a href="https://twitter.com/faruuhan" className="hover:text-blue-400">
            <FaTwitter className="text-[24px]" />
          </a>
          <a href="https://instagram.com/faruuhan" className="hover:text-pink-700">
            <FaInstagram className="text-[24px]" />
          </a>
          <a href="https://linkedin.com/in/faruuhan" className="hover:text-sky-600">
            <FaLinkedin className="text-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

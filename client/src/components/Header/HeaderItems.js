import { CgNotes } from "react-icons/cg";
import { FaBook, FaGlobe, FaGlobeAsia, FaHome, FaKey, FaSave, FaSitemap } from "react-icons/fa";
import { IoLogIn, IoLogInOutline, IoPeople, IoPerson } from "react-icons/io5";
import { IoIosLogOut, IoIosSettings, IoMdSettings } from "react-icons/io";

export const headerLinks = [
    {
      icon: <FaHome />,
      name: "Home",
      to: "/",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <CgNotes />,
      name: "Blogs",
      to: "/blogs",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoLogInOutline />,
      name: "Login",
      to: "/login",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoLogIn />,
      name: "Sign Up",
      to: "/signup",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoPeople />,
      name: "Community",
      to: "/community",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <FaBook />,
      name: "Writing Guidelines",
      to: "/guidelines",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <FaGlobeAsia />,
      name: "Reviewer Panel",
      to: "https://reviewbloggerspace.singhteekam.in/",
      target: "_blank",
      onclick: "closeCanvas",
    },
    {
      icon: <FaSitemap />,
      name: "Sitemap",
      to: "/sitemap",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoPerson />,
      name: "About Developer",
      to: "/aboutdeveloper",
      target: "",
      onclick: "closeCanvas",
    },
  ];

export const authheaderLinks = [
    {
      icon: <FaHome />,
      name: "Home",
      to: "/",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <CgNotes />,
      name: "Blogs",
      to: "/blogs",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoPerson />,
      name: "My Profile",
      to: "/myprofile",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <CgNotes />,
      name: "New Blog",
      to: "/newblog",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <CgNotes />,
      name: "My Blogs",
      to: "/myblogs",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <FaSave />,
      name: "Saved Blogs",
      to: "/savedblogs",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoIosSettings />,
      name: "Settings",
      to: "/settings",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <FaKey />,
      name: "Change Password",
      to: "/changepassword",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoIosLogOut />,
      name: "Logout",
      to: "/",
      target: "",
      onclick: "logout",
    },
    {
        icon: <IoPeople />,
        name: "Community",
        to: "/community",
        target: "",
        onclick: "closeCanvas",
      },
      {
        icon: <FaBook />,
        name: "Writing Guidelines",
        to: "/guidelines",
        target: "",
        onclick: "closeCanvas",
      },
    {
      icon: <FaGlobeAsia />,
      name: "Reviewer Panel",
      to: "https://reviewbloggerspace.singhteekam.in/",
      target: "_blank",
      onclick: "closeCanvas",
    },
    {
      icon: <FaSitemap />,
      name: "Sitemap",
      to: "/sitemap",
      target: "",
      onclick: "closeCanvas",
    },
    {
      icon: <IoPerson />,
      name: "About Developer",
      to: "/aboutdeveloper",
      target: "",
      onclick: "closeCanvas",
    },
  ];
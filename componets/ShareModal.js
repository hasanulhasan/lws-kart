"use client";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

export default function ShareModal({ open, setOpen }) {
  return (
    <div className="flex gap-8 p-8 px-8 absolute bg-gray-300 left-1/2 top-1/3 rounded-md">
      <TelegramShareButton url={window.location.href}>
        <div className="text-2xl">
          <FaTelegram />
        </div>
      </TelegramShareButton>
      <WhatsappShareButton url={window.location.href}>
        <div className="text-2xl">
          <IoLogoWhatsapp />
        </div>
      </WhatsappShareButton>
      <FacebookShareButton url={window.location.href}>
        <div className="text-2xl">
          <FaFacebook />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={window.location.href}>
        <div className="text-2xl">
          {" "}
          <FaLinkedin />{" "}
        </div>
      </LinkedinShareButton>
      <div
        onClick={() => setOpen(!open)}
        className=" px-2 text-black text-2xl font-extrabold rounded-bl-md absolute top-0 right-0 cursor-pointer rounded-tr-md"
      >
        X
      </div>
    </div>
  );
}

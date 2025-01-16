import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export default function Footer(){
  const today = new Date();

  return (
    <footer className="angularGradient p-4 space-y-6 text-white text-center flex flex-col items-center" id="contact">
      <h2 className="font-bold text-2xl">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 my-6 w-fit md:w-full md:px-8">
        <div className="w-full md:w-fit">
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="https://www.facebook.com/RhedgeStudios/"><FaFacebookSquare />@rhedgestudios</a>
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="https://www.instagram.com/rhedgestudios/"><BsInstagram />@rhedgestudios</a>
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="https://www.linkedin.com/company/rhedge-studios/"><FaLinkedin />Rhedge Studios</a>
        </div>
        <div className="w-full md:w-fit">
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="mailto:rhedgestudios@gmail.com"><MdOutlineMail />rhedgestudios@gmail.com</a>
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="tel:+2348081323411"><FaPhoneAlt />+234 808 132 3411</a>
          <a className="flex gap-2 hover:underline items-center" target="_blank" href="https://www.linkedin.com/company/rhedge-studios/"><BsTwitterX />@RhedgeStudios</a>
        </div>
      </div>
      <p>Copyright @{today.getFullYear()} Rhedge Studios</p>
    </footer>
  )
}

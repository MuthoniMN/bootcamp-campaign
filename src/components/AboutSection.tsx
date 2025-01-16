import { MdComputer } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiCalendarLine } from "react-icons/ri";
import { LuHandshake } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";

export default function AboutSection(){
  return (
    <section className="flex flex-col md:flex-row py-6 items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src="/about-img.png" alt="Rhedge Studio Interns" className="max-w-[400px]" />
      </div>
      <section className="w-full md:w-1/2 py-6 flex flex-col gap-4 px-4">
        <h2 className="text-2xl md:text-[48px] text-[#410372] font-bold">About Rhedge Studios</h2>
        <p>Rhedge studios is more than just a boot camp,we’re a launchpad for your dream career. By partnering with leading tech companies, we bridge the gap between education and industry, providing real-world internship experiences.</p>
          <div className="flex flex-col gap-2">
            <p className="flex gap-2 items-center">
            <span className="me-2 text-[#440770]">
              <MdComputer />
            </span>
            Web development, UI/UX design, Graphics design, Cybersecurity
            </p>
            <p className="flex gap-2 items-center">
            <span className="text-[#440770] font-bold text-xl">
              <HiOutlineUsers />
            </span>
            Access to network of like-minded individuals and potential employees
            </p>
            <p className="flex gap-2 items-center">
            <span className="text-[#440770] font-bold text-xl">
              <RiCalendarLine />
            </span>
            Intensive training programs tailored to meet the needs of top employees
            </p>
            <p className="flex gap-2 items-center">
            <span className="text-[#440770] font-bold text-xl">
              <LuHandshake />
            </span>
            Hands-on projects and collaboratiive learning opportunities
            </p>
            <p className="flex gap-2 items-center">
            <span className="text-[#440770] font-bold text-xl">
              <GoTrophy />
            </span>
            93% of interns land full-time tech roles within 3 months
            </p>
        </div>
      </section>
    </section>
  )
}

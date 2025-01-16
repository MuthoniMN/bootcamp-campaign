import { IoMdCode } from "react-icons/io";
import { HiOutlineBookOpen, HiOutlineUsers } from "react-icons/hi2";
import { MdComputer } from "react-icons/md";

export default function Tracks(){
  return (
    <section className="w-full py-6 md:py-16 bg-[#4103721a] text-center flex flex-col items-center justify-center" >
      <h2 className="text-3xl md:text-[48px] text-[#410372] font-bold">Courses Offered In The Bootcamp</h2>
      <div className="w-full max-w-[720px] flex flex-wrap gap-8 mt-12 items-center justify-center px-4">
        <div className="w-full md:w-[45%] py-4 px-6 bg-white text-[#410372] font-bold text-xl flex flex-col items-center justify-center gap-4 rounded-md h-[200px] max-w-[320px]">
          <IoMdCode className="text-5xl"/>
          <p>UI/UX Design</p>
        </div>
        <div className="w-full md:w-[45%] py-4 px-6 bg-white text-[#410372] font-bold text-xl flex flex-col items-center justify-center gap-4 rounded-md h-[200px] max-w-[320px]">
          <HiOutlineBookOpen className="text-5xl" />
          <p>Graphic Design</p>
        </div>
        <div className="w-full md:w-[45%] py-4 px-6 bg-white text-[#410372] font-bold text-xl flex flex-col items-center justify-center gap-4 rounded-md h-[200px] max-w-[320px]">
          <HiOutlineUsers className="text-5xl" />
          <p>Back-end Development</p>
        </div>
        <div className="w-full md:w-[45%] py-4 px-6 bg-white text-[#410372] font-bold text-xl flex flex-col items-center justify-center gap-4 rounded-md h-[200px] max-w-[320px]">
          <MdComputer className="text-5xl" />
          <p>Front-end Development</p>
        </div>

      </div>
    </section>
  );
}

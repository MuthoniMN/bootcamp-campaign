import { GiGraduateCap } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaUser, FaPlay } from "react-icons/fa6";

export default function Benefits(){
  return (
    <section className="w-full flex flex-col md:flex-row gap-8 justify-center items-center py-12 px-4 md:px-8">
    <div>
      <img src="/benefits-img.png" alt="Rhedge Studios Proffessionals" />
    </div>
    <div className="w-full md:w-[45%]">
      <h2 className="text-3xl md:text-[32px] font-bold"><span className="text-[#9747ff]">Benefits</span> From Our Internship Bootcamp</h2>
      <div className="space-y-4 pt-6">
        <div className="flex gap-4 items-center">
          <p className="w-[60px] h-[50px] text-center text-white bg-[#410372] rounded-[50%] flex items-center justify-center"> <GiGraduateCap className="text-3xl" /> </p>
          <div>
            <h3 className="texl-xl font-bold">Online Degrees</h3>
            <p>Complete course works on your own schedule, from anywhere and  anytime</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-[90px] h-[50px] text-center text-white bg-[#410372] rounded-[50%] flex items-center justify-center"><HiOutlineBookOpen className="text-2xl" /></p>
          <div>
            <h3 className="texl-xl font-bold">Short Courses</h3>
            <p>Enhances career prospects and employability which also makes an individual a more  competitive candidate in the job market</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-[110px] h-[50px] text-center text-white bg-[#410372] rounded-[50%] flex items-center justify-center"><FaUser className="text-2xl" /></p>
          <div>
            <h3 className="texl-xl font-bold">Training from Experts</h3>
            <p>Experts provide tailored guidance , share their real-world experience and offer valuable feedback, helping you improve faster and avoiding costly mistakes </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="w-[82px] h-[50px] text-center text-white bg-[#410372] rounded-full flex items-center justify-center"><FaPlay className="text-3xl" /></p>
          <div>
            <h3 className="texl-xl font-bold">1.5k Video Courses</h3>
            <p>Video courses offer an engaging and immersive lmmersive
 learning experience making concepts easier to understand</p>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}

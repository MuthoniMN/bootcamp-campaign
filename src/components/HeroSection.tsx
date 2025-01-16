import { LuMessageCircle } from "react-icons/lu";

export default function HeroSection(){
  return (
    <section className="flex flex-col gap-12 md:gap-0 md:flex-row items-center w-full md:h-[80vh] px-8 py-4">
      <div className="w-full md:w-1/2 h-full flex flex-col gap-6 justify-center">
        <h1 className="text-3xl font-bold md:text-[48px]">Launch Your Tech Career<span className="block mt-[18px] text-[#440770]">with Real-World Experience</span></h1>
        <p className="max-w-[450px]">Join our intensive internship bootcamp and gain hands-on experience with top Tech Professonals, setting you up for success in your career.</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#440476] text-white transition-all hover:font-bold rounded-md">Enroll Now</button>
          <button className="px-4 py-2 border-2 border-[#440476] text-[#410372] transition-all hover:font-bold rounded-md">Learn More</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
        <img src="/hero-img.png" alt="Rhedge Studios Interns" className="max-w-[400px]" />
        <button className="px-4 py-2 bg-[#440476] text-white transition-all hover:font-bold rounded-full text-4xl absolute bottom-0 right-0">
          <LuMessageCircle />
        </button>
      </div>
    </section>
  );
}

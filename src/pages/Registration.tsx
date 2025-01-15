import RegistrationForm from "../components/RegistrationForm";

export default function Registration(){
  return (
    <section className="bg-white py-6 md:py-10 px-4 w-[95%] rounded-md md:w-full h-fit lg:h-screen lg:overflow-hidden mt-[-30px] md:mt-0">
      <div className="flex flex-col gap-[3px] lg:gap-[18px]">
        <h1 className="text-2xl lg:text-[56px] text-black font-bold">Registration</h1>
        <div className="w-[70px] h-[4px] bg-[#330066]"></div>
      </div>
      <RegistrationForm />
    </section>
  )
}

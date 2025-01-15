import { Outlet } from "react-router";

export default function Auth(){
  return (
    <main className="w-[100vw] max-w-[100%] min-h-[100vh] h-fit flex flex-col md:flex-row items-center md:items-start authContainer">
      <section className="md:w-1/2 md:h-full flex items-center justify-center md:items-start md:justify-start ">
        <img src="./auth-logo.png" alt="Rhedge Studios" className="w-[200px] md:w-[250px] md:h-[250px] h-auto ms-[-15px] mt-[-50px] md:ms-[-30px]" />
      </section>
      <section className="md:w-1/2 h-full flex justify-center">
        <Outlet />
      </section>
    </main>
  )
}

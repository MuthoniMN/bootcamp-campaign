import { useState } from "react";
import { RiMenuFill, RiMenu4Line } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { NavLink } from "react-router";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="flex w-full items-center justify-between relative">
      <img src="/nav-logo.png" alt="Rhedge Studios" />
      <button className={`${ open && 'absolute top-[12px] right-[220px]' } px-4 py-2 border-2 border-[#440476] text-[#410372] transition-all hover:font-bold rounded-md lg:hidden text-xl me-[24px] cursor-pointer`} onClick={() => setOpen(true)}>
      { open ? (<RiMenu4Line />) : (<RiMenuFill />) }
      </button>
      <div className={`${open ? 'block absolute top-0 right-0 h-fit md:w-fit justify-self-end bg-[#440770] text-white py-8 text-center space-y-6 px-4 z-10' :'hidden'} lg:flex w-full`}>
        <button className={`absolute top-[16px] right-0 px-4 py-2 text-white transition-all hover:font-bold rounded-md lg:hidden text-xl me-[24px] text-xl text-right cursor-pointer`} onClick={() => setOpen(false)}>
        <IoMdCloseCircle />
        </button>

      <nav className="w-full">
        <ul className={`${open ? 'block space-y-4' : 'flex'} gap-4 w-full justify-center`}>
          <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770]`}>
          <a href="#">Home</a>
          </li>
          <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770] cursor-pointer`}>
          <a href="#about">About</a>
          </li>
          <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770] cursor-pointer`}>
          <NavLink to="/register">Apply</NavLink>
          </li>

          <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770] cursor-pointer`}>
          <a href="#faq">FAQ</a>
          </li>
          <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770] cursor-pointer`}>
          <a href="#testimonials">Testimonials</a>
          </li>
         <li className={`text-lg hover:underline ${open && 'hover:bg-white'  } hover:text-[#440770] cursor-pointer`}>
          <a href="#contact">Contact</a>
          </li>
      </ul>
      </nav>
      <div className="w-full md:w-1/4 flex gap-4 justify-center items-center">
          <button className={`px-4 py-2 ${open ? 'bg-white text-[#440476]' :'bg-[#440476] text-white'} transition-all hover:font-bold rounded-md cursor-pointer`}>
          <NavLink to="/register">Sign Up</NavLink>
</button>
          <button className={`px-4 py-2 border-2 ${open ? 'text-white border-white' : 'border-[#440476] text-[#410372]'} transition-all hover:font-bold rounded-md cursor-pointer`}>Log In</button>
        </div>
      </div>
    </header>
  )
}

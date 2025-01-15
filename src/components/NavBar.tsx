export default function Navbar(){
  return (
    <header className="flex w-full items-center">
      <img src="/nav-logo.png" alt="Rhedge Studios" />
      <nav className="w-full">
        <ul className="flex gap-4 w-full justify-center">
          <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="#">Home</a>
          </li>
          <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="#about">About</a>
          </li>
          <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="/register">Register</a>
          </li>

          <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="#faq">FAQ</a>
          </li>
          <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="#testimonials">Testimonials</a>
          </li>
         <li className="text-lg hover:underline hover:text-[#440770]">
          <a href="#contact">Contact</a>
          </li>
      </ul>
      </nav>
      <div className="w-1/5 flex gap-4">
          <button className="px-4 py-2 bg-[#440476] text-white transition-all hover:font-bold rounded-md">Sign Up</button>
          <button className="px-4 py-2 border-2 border-[#440476] text-[#410372] transition-all hover:font-bold rounded-md">Log In</button>
        </div>

    </header>
  )
}

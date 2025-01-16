import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonials(){
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');
  const testimonials = [
    {
      text: "“The curriculum was cutting-edge and the instructors were top-notch. Rhedge Studios boot camp exceeded all my expectations.”",
      user: "Sophia Nkanang",
      role: "UI/UX Designer at Microsoft"
    },
    {
      text: "“Rhedge Studios transformed my career.I went from a non-tech background to landing my dream job at google in just 6 months.”",
      user: "Ubong Umana",
      role: "Web Developer at Google"
    },
    {
      text: "“The boot camp opportunity at Rhedge studios led directly to our current jobs. We couldn’t have asked for a better start in tech.”",
      user: "Catherine & Michelle",
      role: "Software Developers at Google"
    }
  ]

  const next = () => {
    if(current + 1 >= testimonials.length){
      setDirection('prev')
      setCurrent(0);
    } else {
      setDirection('next')
      setCurrent(current + 1);
    }
  }

  const prev = () => {
    if(current - 1 < 0){
      setDirection('next')
      setCurrent(testimonials.length - 1);
    } else {
      setDirection('prev')
      setCurrent(current - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    console.log(current)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="testimonials py-12 text-white flex flex-col items-center gap-16" id="testimonials">
      <h2 className="text-3xl text-[32px] font-bold">Intern Testimonials</h2>
      <section className="flex justify-between items-center gap-4">
        <p> <IoIosArrowBack className="text-5xl" onClick={() => prev()} /> </p>
          <div className="relative w-[300px] md:w-[450px] h-[200px] overflow-hidden">
          <div
            className="absolute w-full h-full flex transition-transform duration-700 ease-in-out space-x-6"
            style={{
              transform: direction === 'next'
                ? `translateX(-${current * 105}%)`
                : `translateX(${current * 105}%)`
            }}
          >
            {testimonials.map((t, id) => (
              <div
                key={id}
                className="flex-shrink-0 w-full p-4 bg-[#9747ffc4] text-white rounded-md"
              >
                <p className="italic mb-4">{t.text}</p>
                <h3 className="font-bold">{t.user}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>        
        <p> <IoIosArrowForward className="text-5xl" onClick={() => next()} /> </p>

      </section>
    </section>
  )
}

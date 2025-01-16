import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6"

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(null);
  const data = [
    {
      question: "Who is eligible for the program",
      answer: "Our program is open to anyone with a passion for technology, regardless of their background. Basic programming knowledge is recommended but not required."
    },
    {
      question: "What type of projects will I work on during the internship?",
      answer: "You would work on  real-world projects that align with your skills and interests, under the guidance of experienced mentors"
    },
    {
      question: "Will I receive any certification or recognition upon completing the bootcamp?",
      answer: "Yes, upon completing the internship, you will receive a certificate of completion and a letter of recommendation"
    },
    {
      question: "What happens after the program ends?",
      answer: "Many of our graduates receive job offers from their internship companies. we also provide ongoing career support and access to the alumni network"
    }
  ]

  const handleClick = (id: number) => {
    if(open === id){
      setOpen(null)
    } else {
      setOpen(id)
    }
  }

  return (
    <section className="py-12 text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="space-y-4 w-full max-w-[720px] px-4 mt-8 text-left">
        { data.map((d, id) => (
          <div className={`bg-[#00000003] border-2 border-slate-100 rounded-md px-4 py-2 shadow-md space-y-4`} onClick={() => handleClick(id)}>
            <h3 className="flex gap-2 items-center">{id === open ? <FaMinus /> : <FaPlus />}{d.question}</h3>
            <p className={`${id === open ? 'block' : 'hidden'}`} >{d.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

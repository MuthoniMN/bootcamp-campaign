import { useState, FormEvent } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export interface User {
  name: string,
  track: number,
  email: string,
  phoneNumber: string,
  cohort: number,
  location: string
}

export default function RegistrationForm(){
  const [data, setData] = useState<User>({} as User);
  const [errors, setErrors] = useState<User>({} as User);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className="py-6 px-2 space-y-4 h-fit lg:my-8">
      <div className="flex gap-4 items-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="name">Full name: </label>
          <input type="text" name="name" id="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="border-2 border-slate-200 rounded-md p-2" placeholder="First and last name" />
          <p className="text-red-600 font-bold">{errors.name}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="track">Track you are applying for: </label>
          <select value={data.track} name="track" onChange={(e) => setData({ ...data, track: +e.target.value })} id="track" className="border-2 border-slate-200 rounded-md p-2 bg-transparent">
            <option value="">-- Please select --</option>
          </select>
          <p className="text-red-600 font-bold">{errors.name}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="border-2 border-slate-200 rounded-md p-2" placeholder="you@email.com" />
          <p className="text-red-600 font-bold">{errors.name}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="phoneNumber">Phone number: </label>
          <PhoneInput
            placeholder="+234987893456"
            value={data.phoneNumber}
            onChange={(value) => setData({ ...data, phoneNumber: value as string })}
            defaultCountry="NG"
            className="border-2 border-slate-200 rounded-md p-2 bg-transparent w-full"
          />          
        </div>
      </div>
      <div className="flex gap-4 items-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="location">Address: </label>
          <input type="text" name="location" id="location" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} className="border-2 border-slate-200 rounded-md p-2" placeholder="Enter your address" />
          <p className="text-red-600 font-bold">{errors.name}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="cohort">Cohort</label>
          <select value={data.cohort} name="cohort" onChange={(e) => setData({ ...data, cohort: +e.target.value })} id="cohort" className="border-2 border-slate-200 rounded-md p-2 bg-transparent">
            <option value="">-- Please select --</option>
          </select>
          <p className="text-red-600 font-bold">{errors.name}</p>
        </div>
      </div>

      <input type="submit" value="Register" className="w-full rounded-xl font-bold bg-[#330066] py-2 text-white my-16" />
    </form>
  );
}

import { useState, FormEvent, useMemo } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { fetchData } from '../utils/fetch';
import { User, Track, Cohort, Errors } from '../types/';
import { validateObject } from '../utils/validate';


export default function RegistrationForm(){
  const [data, setData] = useState<User>({} as User);
  const [errors, setErrors] = useState<Errors>({} as Errors);
  const [success, setSuccess] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);

  useMemo(async () => {
    const res = await fetchData('/tracks');

    setTracks(res.data.track)
  }, [])

  useMemo(async () => {
    const res = await fetchData('/cohorts')

    if(res.data){
      setCohorts(res.data.cohort);
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validate = validateObject(data);
    console.log(validate)
    setErrors(validate as Errors);

    if(Object.keys(errors).length <= 0){
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
      })
      console.log(response);

      if(!response.ok){
        setErrors({ ...(errors as Errors), registration: "Failed to register for bootcamp. Please try again" });

        return;
      }

      const resData = await response.json();
      const cohort = cohorts.filter(cohort => cohort.id === data.cohort)[0];

      if(resData.data){
        console.log(resData);
        setSuccess(`Successfully registered for the ${cohort.title}. Please check your email for further instructions`);
        return;
      }
    }

    console.log(errors);
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
          <select value={data.trackId} name="track" onChange={(e) => setData({ ...data, trackId: +e.target.value })} id="track" className="border-2 border-slate-200 rounded-md p-2 bg-transparent">
            <option value="">-- Please select --</option>
            {
              tracks.map(track => (
                <option value={track.id} key={track.id}>{track.title}</option>
              ))
            }
          </select>
          <p className="text-red-600 font-bold">{errors.track}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="border-2 border-slate-200 rounded-md p-2" placeholder="you@email.com" />
          <p className="text-red-600 font-bold">{errors.email}</p>
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
          <p className="text-red-600 font-bold">{errors.phoneNumber}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="location">Address: </label>
          <input type="text" name="location" id="location" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} className="border-2 border-slate-200 rounded-md p-2" placeholder="Enter your address" />
          <p className="text-red-600 font-bold">{errors.location}</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <label htmlFor="cohort">Cohort</label>
          <select value={data.cohort} name="cohort" onChange={(e) => setData({ ...data, cohort: +e.target.value })} id="cohort" className="border-2 border-slate-200 rounded-md p-2 bg-transparent">
            <option value="">-- Please select --</option>
            {
              cohorts.map(cohort => {
                const date = new Date(cohort.startDate)
                return(
                <option value={cohort.id} key={cohort.id}>{cohort.title} - {date.toDateString()}</option>
              )
              })
            }
          </select>
          <p className="text-red-600 font-bold">{errors.cohort}</p>
        </div>
      </div>

      {
        errors.registration ? 
          (<p className="bg-red-400 text-red-700 font-bold py-2 px-4">{errors.registration}</p>)
            :
          success && (<p className="bg-emerald-300 text-emerald-700 font-bold py-2 px-4">{success}</p>)
      }

      <input type="submit" value="Register" className="w-full rounded-xl font-bold bg-[#330066] py-2 text-white my-16" />
    </form>
  );
}

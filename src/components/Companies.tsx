import { FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa"

 export default function Companies(){
  return (
    <div className="flex justify-between w-full overflow-hidden purpleGradient text-white py-4 px-6">
    <div className="slider">
      <p className="text-2xl flex gap-2 items-center">
        <FaGoogle />
        Google
      </p>
      <p className="text-2xl flex gap-2 items-center">
        <FaMicrosoft />
        Microsoft
      </p>
      <p className="text-2xl flex gap-2 items-center">
        <FaAmazon />
        Amazon
      </p>
      <div>
        <img src="/flutterwave.png" alt="Flutterwave" className="w-[180px]" />
      </div>
      <p className="text-2xl flex gap-2 items-center"></p>
    </div>
  </div>
  )
 }

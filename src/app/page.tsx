import {appDictionary} from "@/app/dictionary";
import {Work_Sans} from "next/font/google"
import {PhoneIcon} from "@heroicons/react/24/outline"

const workSansFont = Work_Sans({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="flex justify-around items-center pt-2 pb-2 bg-navbar" style={workSansFont.style}>
      <div className="inline-flex">
        <p className="text-sm text-white">
          {appDictionary.navTitle}&nbsp;
        </p>
        <a className="text-sm text-white underline">{appDictionary.navLink}</a>
      </div>
     <div className="inline-flex">
       <PhoneIcon className="w-5 text-white"/>&nbsp;
       <p className="text-sm text-white">{appDictionary.navPhone}</p>
     </div>
      
    </div>
  )
}

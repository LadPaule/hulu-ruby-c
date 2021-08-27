import Image from "next/image"

function footer() {
  return (
    <div className="flex flex-col items-center bg-[#08222c] sm:font-extrabold">
      <p>This is developed using NextJs and Tailwind CSS</p>
      <a className="hover:text-white cursor-pointer hover:font-bold animate-bounce" href="https://github.com/LadPaule/hulu-Ruby">Follow the github repo</a>
      <a className="text-red-500 font-semibold" href="ssozipaule@gmail.com">ssozipaule@gmail.com</a>
        
      <div>
        
      </div>
      
    </div>
  )
}

export default footer

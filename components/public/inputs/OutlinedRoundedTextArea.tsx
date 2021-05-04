import { ReactNode } from "react";

const OutlinedRoundedTextArea =  ({placeholder, icon,updateText} : {
    placeholder: string,
    icon: ReactNode | null,
    updateText: (t) => void
}) => {
    return (
      <div className="relative text-gray-400 focus-within:text-purple-600">
         <span className="absolute inset-y-0 left-0 flex items-center ">
           {icon}
        </span>
        <textarea  onChange={(e) => updateText(e.target.value)} className={"rounded-2xl w-full h-18 py-2 text-sm text-gray-800 focus:text-purple-600 focus:outline-none ring-1 ring-gray-300 transition ease-in duration-200 focus:ring-purple-600 bg-white"+(icon? " pl-10":" pl-3")} placeholder={placeholder}/>
      </div>
        
    );
} 
OutlinedRoundedTextArea.defaultProps = {
    placeholder: "",
    icon: null,
}
export default OutlinedRoundedTextArea;
import { ReactNode } from "react";

const OutlinedRoundedTextField =  ({type, placeholder, icon,updateText} : {
    type: string,
    placeholder: string,
    icon: ReactNode | null,
    updateText: (t) => void
}) => {
    return (
      <div className="relative text-gray-400 focus-within:text-purple-600">
         <span className="absolute inset-y-0 left-0 flex items-center ">
           {icon}
        </span>
        <input onChange={(e) => updateText(e.target.value)} type={type} className={"rounded-2xl w-full h-10 py-2 text-sm text-gray-800 focus:text-purple-600 focus:outline-none ring-1 ring-gray-300 transition ease-in duration-200 focus:ring-purple-600 bg-white"+(icon? " pl-10":" pl-3")} placeholder={placeholder}/>
      </div>
        
    );
} 
OutlinedRoundedTextField.defaultProps = {
    type: "text",
    placeholder: "",
    icon: null,
}
export default OutlinedRoundedTextField;
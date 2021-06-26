import { ReactNode } from "react";

const OutlinedFilledRoundedTextField =  ({type, placeholder, icon,updateText} : {
    type: string,
    placeholder: string,
    icon: ReactNode | null,
    updateText: (t) => void
}) => {
    return (
      <div className="relative text-gray-400 focus-within:text-purple-600">
         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
           {icon}
        </span>
        <input onChange={(e) => updateText(e.target.value)} type={type} className="bg-gray-100 rounded-2xl w-full h-10 py-2 text-sm text-gray-800 focus:text-purple-600 pl-10 focus:outline-none ring-1 ring-gray-300 transition ease-in duration-200 focus:ring-purple-600 focus:bg-white" placeholder={placeholder}/>
      </div>
        
    );
} 
OutlinedFilledRoundedTextField.defaultProps = {
    type: "text",
    placeholder: "",
    icon: null,
}
export default OutlinedFilledRoundedTextField;
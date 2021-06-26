import {ReactNode} from "react";

const OutlinedInputTextField = ({type, placeholder, icon,updateText} : {
    type: string,
    placeholder: string,
    icon: ReactNode | null,
    updateText: (t) => void
}) => {
    return (
      <div className="relative text-purple-400 focus-within:text-purple-600">
         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
           {icon}
        </span>
        <input onChange={(e) => updateText(e.target.value)} type={type} className="w-full h-10 py-2 text-sm text-gray-800 focus:text-purple-600 bg-white rounded-md pl-10 focus:outline-none ring-1 ring-purple-400 transition ease-in duration-200 focus:ring-purple-600 focus:bg-white hover:shadow-lg" placeholder={placeholder}/>
      </div>
        
    );
} 
OutlinedInputTextField.defaultProps = {
    type: "text",
    placeholder: "",
    icon: null,
}

export default OutlinedInputTextField;

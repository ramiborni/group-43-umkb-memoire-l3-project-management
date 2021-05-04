import { ReactNode } from "react";

const InfoCard = ({children} : {children:ReactNode}) => {
    return (
        <div className="w-full p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            {children}
        </div>
    );
}

export default InfoCard;
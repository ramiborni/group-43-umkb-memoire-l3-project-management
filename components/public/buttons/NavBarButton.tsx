import { MenuIcon } from "@heroicons/react/outline";
import React from "react";

const NavBarButton = ({size,click}:{size:string,click:()=>any}) => {
    return (
        <button onClick={click} className="focus:outline-none block lg:hidden"><MenuIcon className={size +' hover:text-purple-400 transition duration-200'}></MenuIcon></button>

    );
}
NavBarButton.defaultProps = {
    size:'h-6'
}

export default NavBarButton;
import Link from "next/link";
import React, {ReactElement} from "react";
import {useRouter} from "next/router";

const SideBarNavigationItem = ({title, icon, link} : {
    title: string,
    icon: ReactElement,
    link: string
}) => {
    const router = useRouter();

    return (
        <Link  href={link}>
            <li  className="p-2 relative h-14 flex flex-row items-center mb-2"
                style={
                    {"listStyleType": "none"}
            }>
                <span className={
                    (router.pathname === link ? 'block' : 'hidden') + " absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                }></span>
                <div className={(router.pathname === link ? 'text-purple-600' : '')+ "  h-12 flex items-center flex-row space-x-6 w-full hover:bg-gray-200 transition duration-200 rounded-lg cursor-pointer"}>
                    <span className="pl-5 ">
                        {icon} </span>
                    <span>
                        <h5>{title}</h5>
                    </span>
                </div>
            </li>
        </Link>
    );
}

export default SideBarNavigationItem;

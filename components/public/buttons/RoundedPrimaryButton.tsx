import Link from "next/link";
import React, {ReactNode} from "react";

const RoundedPrimaryButton = ({children, link} : {
    children: ReactNode,
    link: string
}) => {
    return (
        <Link href={link}>
            <a className="flex flex-row items-center justify-center space-x-2 focus:outline-none h-10 w-full rounded-xl bg-purple-500 shadow-sm hover:shadow-md ease-linear transition-all duration-150 active:bg-purple-700 text-white">
                {children} </a>
        </Link>

    );
}

export default RoundedPrimaryButton;

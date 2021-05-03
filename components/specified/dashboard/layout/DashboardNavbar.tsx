import {BellIcon, SearchIcon} from "@heroicons/react/outline";
import {CogIcon} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import NavBarButton from "../../../public/buttons/NavBarButton";
import OutlinedFilledRoundedTextField from "../../../public/inputs/OutlinedFilledRoundedTextField";

const DashboardNavbar = ({locale, drawer, setOpenDrawer} : {
    locale: string,
    drawer: boolean,
    setOpenDrawer: React.Dispatch < React.SetStateAction < boolean >>
}) => {
    const {t} = useTranslation('dashboard')


    return (
        <header className="z-30 py-7 h-24 bg-white dark:bg-gray-800">
            <div className="container flex flex-row items-center justify-center text-gray-700 dark:text-purple-300">
                    <div className="flex flex-1 space-x-5">
                    <NavBarButton size="h-6"
                        click={
                            () => setOpenDrawer(!drawer)
                        }/>
                        <h1 className="text-lg font-bold hidden lg:block">{t('dashboard')}</h1>
                    </div>
                    <div className="hidden md:flex pr-5 lg:pr">
                    <OutlinedFilledRoundedTextField updateText={
                            () => null
                        }
                        placeholder={
                            t('search')
                        }
                        type="search"
                        icon={
                            <SearchIcon
                        className="h-5 w-5"/>
                        }/>
                    </div>

                <ul className="flex flex-1 items-center justify-end flex-shrink-0 space-x-6">
                    <li className="relative">
                        <Link href="/dashboard" locale={locale}>
                         <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications" aria-haspopup="true">
                           <h1 className="font-bold hover:text-purple-400 transition duration-200">{locale.toUpperCase()}</h1>
                         </button>
                        </Link>
                    </li>
                    <li className="relative">
                        <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Notifications" aria-haspopup="true">

                            <BellIcon className="h-6 w-6 hover:text-purple-400 transition duration-200"/>
                            <span aria-hidden="true" className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                        </button>
                    </li>
                    <li className="relative">
                        <button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
                            <CogIcon className="h-6 w-6 hover:text-purple-400 transition duration-200"/>
                        </button>                        
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default DashboardNavbar;

import {BriefcaseIcon, DotsVerticalIcon, FolderIcon} from "@heroicons/react/outline";
import {motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Badge from "../../components/public/badges/Badge";
import InfoCard from "../../components/specified/dashboard/index/InfoCard";
import {Line} from 'rc-progress';
import LatestProject from "../../components/specified/dashboard/index/LatestProject";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const index = () => {
    const {t} = useTranslation('dashboard');
    const files = [
        {
            "filename": "test.pdf",
            "subject": "project-1",
            "date": "2021-01-01"
        }, {
            "filename": "test2.docx",
            "subject": "project-1",
            "date": "2021-02-01"
        }, {
            "filename": "test3.xlsx",
            "subject": "project-1",
            "date": "2021-03-01"
        },
    ]

    return (
        <DashboardLayout>
            <div className="my-10">
                <InfoCard>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-md lg:text-2xl mb-2">
                                {
                                t('welcome') + ' '
                            }
                                <strong>Akram Mechenetel !</strong>
                            </h2>
                            <p className="text-sm lg:text-md">
                                {
                                t('welcome-more')
                            } </p>
                        </div>
                        <div className="flex-none text-left">
                            <img height="200" width="200" src="/backgrounds/welcomeUser.png"/>
                        </div>
                    </div>
                </InfoCard>
            </div>
            <div className="my-16 flex flex-col lg:flex-row items-center justify-center lg:space-x-5">
                <div className="flex">
                    <LatestProject/>
                </div>
                <div className="flex">
                    <Calendar className="rounded-xl border-none p-5"/>
                </div>
                <div className="flex">
                    <InfoCard>
                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-row items-center w-full space-x-3">
                            <div className="flex-1">
                                    <h2 className="text-xl">Latest Documents</h2>
                                </div>
                                <div className="flex-none text-right">
                                    <a href="#">
                                        <DotsVerticalIcon className="h-7 w-7"/>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start space-y-6">
                                {
                                files.map((file, i) => <div key={
                                        'file-' + i
                                    }
                                    className="flex w-full flex-row space-x-3 cursor-pointer items-center justify-start text-left hover:bg-gray-100 rounded-xl py-2 px-5">
                                    <div className="flex flex-row space-x-3">
                                        <div className="flex rounded-full p-2 bg-purple-400 text-white">
                                            <FolderIcon className="h-5 w-5"/>
                                        </div>
                                        <div className="flex">
                                            {
                                            file.filename
                                        } </div>
                                    </div>

                                </div>)
                            } </div>
                        </div>

                    </InfoCard>
                </div>

            </div>
        </DashboardLayout>
    );
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})

export default index;

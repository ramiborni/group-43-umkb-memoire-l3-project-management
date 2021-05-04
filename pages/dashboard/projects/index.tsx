import {BriefcaseIcon, DotsVerticalIcon, PlusIcon} from "@heroicons/react/outline";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Badge from "../../../components/public/badges/Badge";
import PrimaryButton from "../../../components/public/buttons/PrimaryButton";
import RoundedPrimaryButton from "../../../components/public/buttons/RoundedPrimaryButton";
import InfoCard from "../../../components/specified/dashboard/index/InfoCard";

const index = () => {
    const {t} = useTranslation('dashboard');
    const inProgressProjects = [{
            title: 'Gestion de projet 2.0',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at maxime eligendi asperiores in facere ea, corrupti ad consectetur dolorum placeat. Quia, natus eligendi ipsum voluptates voluptatum labore aperiam exercitationem.',
            fields: ['IT', 'Economie']
        }];
    const finishedProjects = [{
            title: 'Gestion de projet 1.0',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at maxime eligendi asperiores in facere ea, corrupti ad consectetur dolorum placeat. Quia, natus eligendi ipsum voluptates voluptatum labore aperiam exercitationem.',
            fields: ['Marketing']
        }]

    return (
        <DashboardLayout>
            <div className="my-10 flex flex-row w-full">
                <div className="flex-1"></div>
                <div className="flex w-40">
                        <RoundedPrimaryButton link="/dashboard/projects/add">
                            <PlusIcon className="h-5 w-5 flex"/>
                            <span className="flex">
                                Add Project</span>
                        </RoundedPrimaryButton>
                </div>

            </div>
            <div className="flex flex-row space-x-5">
                <div className="flex flex-col space-y-8">
                    <h1 className="mb-5 text-xl">In Progress Projects ({
                        inProgressProjects.length
                    })</h1>
                    {
                    inProgressProjects.map((item, i) => <InfoCard>
                        <div key={
                                'p' + i
                            }
                            className="flex flex-col space-y-5">
                            <div className="flex flex-row space-x-5 items-center">
                                <div className="flex rounded-full p-2 bg-purple-400 text-white ">
                                    <BriefcaseIcon className="h-5 w-5"/>
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold text-xl">
                                        {
                                        item.title
                                    }</h1>
                                </div>
                                <div className="flex-none text-right">
                                    <a href="#">
                                        <DotsVerticalIcon className="h-7 w-7"/>
                                    </a>
                                </div>
                            </div>

                            <div className="flex">
                                <p className="text-sm">
                                    {
                                    item.description
                                } </p>
                            </div>
                            <div className="flex space-x-5">
                                {
                                item.fields.map((field, j) => <Badge key={
                                        `p-${i}-f-${j}`
                                    }
                                    outlined={true}
                                    text={field}
                                    color="purple"/>)
                            } </div>
                        </div>
                    </InfoCard>)
                } </div>
                <div className="flex flex-col space-y-8">
                    <h1 className="mb-5 text-xl">Finished Projects ({
                        finishedProjects.length
                    })</h1>
                    {
                    finishedProjects.map((item, i) => <InfoCard>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-row space-x-5 items-center">
                                <div className="flex rounded-full p-2 bg-purple-400 text-white ">
                                    <BriefcaseIcon className="h-5 w-5"/>
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-bold text-xl">
                                        {
                                        item.title
                                    }</h1>
                                </div>
                                <div className="flex-none text-right">
                                    <a href="#">
                                        <DotsVerticalIcon className="h-7 w-7"/>
                                    </a>
                                </div>
                            </div>

                            <div className="flex">
                                <p className="text-sm">
                                    {
                                    item.description
                                } </p>
                            </div>
                            <div className="flex space-x-5">
                                {
                                item.fields.map((field, j) => <Badge key={
                                        `p-${i}-f-${j}`
                                    }
                                    outlined={true}
                                    text={field}
                                    color="purple"/>)
                            } </div>
                        </div>
                    </InfoCard>)
                } </div>

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

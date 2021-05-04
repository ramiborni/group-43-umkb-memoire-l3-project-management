import {
    BriefcaseIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    SaveIcon,
    ViewListIcon
} from "@heroicons/react/outline";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import RoundedPrimaryButton from "../../../components/public/buttons/RoundedPrimaryButton";
import OutlinedRoundedTextArea from "../../../components/public/inputs/OutlinedRoundedTextArea";
import OutlinedRoundedTextField from "../../../components/public/inputs/OutlinedRoundedTextField";
import InfoCard from "../../../components/specified/dashboard/index/InfoCard";

const add = () => {
    return (
        <DashboardLayout>
            <div className="p-10 flex flex-col space-y-5">
                <InfoCard>
                    <div className="p-5 flex flex-col space-y-5">
                        <div className="mx-4 p-4">
                            <div className="flex items-center">
                                <div className="flex items-center text-white relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-purple-400 border-purple-400">
                                        <BriefcaseIcon className="h-5 w-full m-auto"/>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-purple-400">Initialize Project</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                <div className="flex items-center text-gray-500 relative">
                                    <div className="text-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                        <ViewListIcon className="h-5 w-full m-auto"/>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Tasks</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                <div className="flex items-center text-gray-500 relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                        <CollectionIcon className="h-5 w-full m-auto"/>

                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">WBS</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                <div className="flex items-center text-gray-500 relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                        <SaveIcon className="h-5 w-full m-auto"/>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm & Save</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </InfoCard>
                <InfoCard>
                    <div className="p-5 flex flex-col space-y-5">
                        <div className="flex  justify-center items-center">
                            <h1 className="text-2xl font-bold">Initialize Project</h1>
                        </div>
                        <div className="flex flex-row space-x-10 pt-10 justify-center items-center">
                            <div className="flex flex-col items-center space-y-5">
                                <div className="flex">
                                    <OutlinedRoundedTextField placeholder="Project name"
                                        updateText={
                                            () => null
                                        }/>
                                </div>
                                <div className="flex">
                                    <OutlinedRoundedTextField placeholder="Client's phone number"
                                        updateText={
                                            () => null
                                        }/>
                                </div>

                            </div>
                            <div className="flex flex-col items-center space-y-5">
                                <div className="flex">

                                    <OutlinedRoundedTextField placeholder="Client's name"
                                        updateText={
                                            () => null
                                        }/>
                                </div>

                                <div className="flex">

                                    <OutlinedRoundedTextField placeholder="Client's address"
                                        updateText={
                                            () => null
                                        }/>
                                </div>

                            </div>
                            <div className="flex flex-col items-center space-y-5">
                                <div className="flex">

                                    <OutlinedRoundedTextField placeholder="Client's company"
                                        updateText={
                                            () => null
                                        }/>
                                </div>
                                <div className="flex">

                                    <OutlinedRoundedTextField placeholder="Client's country"
                                        updateText={
                                            () => null
                                        }/>
                                </div>

                            </div>
                        </div>
                        <OutlinedRoundedTextArea placeholder="Project Description"
                            updateText={
                                () => null
                            }/>
                        <OutlinedRoundedTextArea placeholder="Project's Goal"
                            updateText={
                                () => null
                            }/>
                        <div className="flex justify-end items-end">
                            <div className="flex-1"></div>
                            <div className="flex w-40">
                                <RoundedPrimaryButton link="/dashboard/projects/add">
                                    Continue
                                </RoundedPrimaryButton>
                            </div>
                        </div>
                    </div>
                </InfoCard>
            </div>
        </DashboardLayout>
    );
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})

export default add;

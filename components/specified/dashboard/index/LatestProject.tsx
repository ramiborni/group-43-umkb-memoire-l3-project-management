import { BriefcaseIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { Line } from "rc-progress";
import React from "react";
import Badge from "../../../public/badges/Badge";
import InfoCard from "./InfoCard";

const LatestProject = () => {
    return (
        <InfoCard>
        <div className="flex flex-col space-y-8">
            <div className="flex flex-row items-center w-full">
            <div className="flex-1">
                    <h2 className="text-xl">Latest Project</h2>
                </div>
                <div className="flex-none text-right">
                    <a href="#">
                        <DotsVerticalIcon className="h-7 w-7"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-6">
                <div className="flex rounded-full p-2 bg-purple-400 text-white ">
                    <BriefcaseIcon className="h-5 w-5"/>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-lg">Project Title</h2>
                </div>
                <div>
                    <Badge outlined={true} text="HIGH PERIORITY" color="red"/>
                </div>
            </div>
            <div className="flex text-lg text-left">
                    Tasks Done : &nbsp;<strong>25/50</strong>
                </div>
                <div>
                   <Line percent={50} strokeWidth={1} strokeColor="#8b5cf6" />
                </div>
                <div className="flex">
                <Badge outlined={false} text="Expected Deadline : 20 June 2021" color="yellow"/>

                </div>
        </div>

    </InfoCard>
    );
}

export default LatestProject;
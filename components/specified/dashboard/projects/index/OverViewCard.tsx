import React from "react";
import InfoCard from "../../../../public/InfoCard";
import UtilStyle from '../../../../../styles/Utilities.module.css'
import { Paper, Typography } from "@material-ui/core";

const OverViewCard = ({num,title,color} : {num:number,title:string,color:string}) => {
    return (
        <Paper elevation={0}
               className="space-y-2 h-52 w-full p-10 shadow-md flex flex-col items-center  rounded-xl">
            <Typography variant="h2" className={color+" text-center font-bold flex-1"}>
                {
                   num
                }</Typography>
            <Typography variant="h5" className="font-bold text-gray-400 text-center flex-none">{title.toUpperCase()}</Typography>
        </Paper>
    );
}

export default OverViewCard;
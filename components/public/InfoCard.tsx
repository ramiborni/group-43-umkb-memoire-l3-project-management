import { Card } from "@material-ui/core";
import React, {ReactNode} from "react";
const InfoCard = ({children} : {
    children: ReactNode
}) => {
    return (
        <Card variant="outlined" style={{borderRadius: '0.75rem'}} className="bg-white p-5">
            {children}
        </Card>
    );
}

export default InfoCard;

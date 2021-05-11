import React from "react";
import InfoCard from "../../../../public/InfoCard";
import UtilStyle from '../../../../../styles/Utilities.module.css'

const OverViewCard = ({num,title,color} : {num:number,title:string,color:string}) => {
    return (
        <InfoCard>
                        <div className={
                            UtilStyle.textCenter
                        }>
                            <h2 className={UtilStyle[color+'Text']}>
                                {num}
                            </h2>
                            <div style={{height:'5px'}}></div>
                            <h5 className={UtilStyle.bgText}>
                                {title}
                            </h5>
                        </div>

                    </InfoCard>
    );
}

export default OverViewCard;
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InfoCard from "../../../components/public/InfoCard";


const add = () => {
    return (
        <DashboardLayout>
            <div className="p-10 flex flex-col space-y-5">
                <InfoCard>
                 

                </InfoCard>
                <InfoCard>
                   
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

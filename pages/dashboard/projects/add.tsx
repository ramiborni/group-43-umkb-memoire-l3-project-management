import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InfoCard from "../../../components/specified/dashboard/index/InfoCard";

const add = () => {
    return (
        <DashboardLayout>
            <div className="p-10 flex flex-col">
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

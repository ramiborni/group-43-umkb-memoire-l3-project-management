import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const add = () => {
    return (
        <DashboardLayout>
            <div className="p-10 flex flex-col">

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
import React, {useEffect, useState} from 'react';
import User from '../../../../models/User';
import dashboardLayoutStyles from '../../../../styles/components/DashboardLayout.module.css'
import UserCardHorizontal from '../layout/UserCardHorizantal'
import ListSideBarNavigationItems from './ListSideBarNavigationItems';
const DashboardSideBar = ({drawer} : {
    drawer: boolean
}) => {


    return (
        <>
            <aside className={
                (!drawer ? "-translate-x-full" : "") + " z-50 inset-y-0 left-0 transform md:static hidden overflow-y-auto bg-white lg:block"
            }>
                <main>
                    <div className={
                        dashboardLayoutStyles.sidebar + ' ' + 'flex flex-col items-center pt-5 w-96 border-r border-gray-100 '
                    }>
                        <div className="flex-1 items-center justify-center text-center w-full space-y-9">
                            <img className="m-auto" height='130' width='130' src="/logo.jpg"/>
                            <ListSideBarNavigationItems key={'ListSideBarNavigationItems'}/>
                        </div>
                    </div>
                </main>
            </aside>
            <aside style={
                    {"marginTop": "5rem"}
                }
                className={
                    (!drawer ? "-translate-x-full" : "") + " pb-24 h-full fixed inset-y-0 left-0 transform lg:relative transition duration-500 ease-in-out z-50 flex-shrink-0 lg:hidden overflow-y-auto bg-white block mt-32"
            }>
                <main>
                    <div className={
                        dashboardLayoutStyles.sidebar + ' ' + 'flex flex-col items-center pt-5 border-r border-gray-100 '
                    }>
                        <div className="w-full flex-1 items-center justify-center">
                            <ListSideBarNavigationItems key={'ListSideBarNavigationItemsMobile'}/>
                        </div>
                        <div className="flex-none mb-4">
                            <UserCardHorizontal userDetails={
                                new User("", "Mechentel", "Akram", "")
                            }/>
                        </div>
                    </div>
                </main>
            </aside>
        </>
    );
}

export default DashboardSideBar;

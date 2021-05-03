import {BriefcaseIcon, HomeIcon, ClipboardListIcon, CalendarIcon, ChartSquareBarIcon, UserGroupIcon, InboxInIcon} from "@heroicons/react/outline";
import React from "react";
import SideBarNavigationItem from "./SideBarNavigationItem";

const ListSideBarNavigationItems = () => {
    const items = [{
            "title": "Dashboard",
            "icon": <HomeIcon className="h-6 w-6"/>,
            "link": "/dashboard"
        },
        {
            "title": "Projects",
            "icon": <BriefcaseIcon className="h-6 w-6"/>,
            "link": "/dashboard/projects"
        },
        {
            "title":"Tasks",
            "icon": <ClipboardListIcon className="h-6 w-6"/>,
            "link":"/dashboard/tasks"
        },
        {
            "title":"Requests",
            "icon": <InboxInIcon className="h-6 w-6"/>,
            "link":"/dashboard/projects/requests"
        },
        {
            "title":"Calendar",
            "icon": <CalendarIcon className="h-6 w-6"/>,
            "link":"/dashboard/calendar"
        },
        {
            "title":"Reports",
            "icon": <ChartSquareBarIcon className="h-6 w-6"/>,
            "link":"/dashboard/reports"
        },
        {
            "title":"Employees",
            "icon": <UserGroupIcon className="h-6 w-6"/>,
            "link":"/dashboard/employees"
        }
    
    ]
    return (
        <ul className="w-full">
            {
            items.map((item,i) => 
                <SideBarNavigationItem key={'dashboard-item-'+i.toString()} title={
                        item.title
                    }
                    icon={
                        item.icon
                    }
                    link={
                        item.link
                    }/>)
        } </ul>
    );
}

export default ListSideBarNavigationItems;

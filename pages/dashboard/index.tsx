import {BriefcaseIcon, DotsVerticalIcon, FolderIcon} from "@heroicons/react/outline";
import {motion} from "framer-motion";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import InfoCard from "../../components/public/InfoCard";
import {Line} from 'rc-progress';
import LatestProject from "../../components/specified/dashboard/index/ProjectDashboardCard";
import {
    Col,
    Container,
    Dropdown,
    Icon,
    IconButton,
    Row,
    Tag,
    Calendar,
    Badge
} from "rsuite";
import UtilStyle from '../../styles/Utilities.module.css'
import WelcomeUser from "../../components/specified/dashboard/index/WelcomeUser";
import ProjectDashboardCard from "../../components/specified/dashboard/index/ProjectDashboardCard";
function getTodoList(date:Date) {
    const formattedDate = date.toISOString().split('T')[0];
    const dateDay : number = parseInt(formattedDate.split('-')[2])
    switch (dateDay) {
      case 10:
        return [
          { time: '10:30 am', title: 'Meeting' },
          { time: '12:00 pm', title: 'Lunch' }
        ];
      case 15:
        return [
          { time: '09:30 pm', title: 'Products Introduction Meeting' },
          { time: '12:30 pm', title: 'Client entertaining' },
          { time: '02:00 pm', title: 'Product design discussion' },
          { time: '05:00 pm', title: 'Product test and acceptance' },
          { time: '06:30 pm', title: 'Reporting' },
          { time: '10:00 pm', title: 'Going home to walk the dog' }
        ];
      default:
        return [];
    }
  }
const index = () => {
    const {t} = useTranslation('dashboard');
    const files = [
        {
            "filename": "test.pdf",
            "subject": "project-1",
            "date": "2021-01-01"
        }, {
            "filename": "test2.docx",
            "subject": "project-1",
            "date": "2021-02-01"
        }, {
            "filename": "test3.xlsx",
            "subject": "project-1",
            "date": "2021-03-01"
        },
    ]
    const latestProject = {
        title:'Hello world Project',
    }
    const latestImpProject = {
        title:'Project Management',

    }
    const renderCell =  (date) => {
        const list = getTodoList(date);

        if (list.length) {
          return <Badge className="calendar-todo-item-badge" />;
        }
      
        return null;
 
      }
      

    return (
        <DashboardLayout>
            <Container>
                <WelcomeUser/>
                <Row className={
                    UtilStyle['has-margin-top-50']
                }>
                    <Col className={UtilStyle['has-padding-20']} xs={24}
                        lg={8}>
                         <ProjectDashboardCard deadline="10/08/2021" typeProject="Latest Project" projectTitle={latestProject.title}  priority={0} numberTasks={50} numberTasksDone={10} />
                    </Col>
                    <Col className={UtilStyle['has-padding-20']} xs={24}
                        lg={8}>
                         <ProjectDashboardCard deadline="15/10/2021" typeProject="Latest Important Porject" projectTitle={latestImpProject.title} priority={1} numberTasks={75} numberTasksDone={40}/>
                    </Col>
                    <Col className={UtilStyle['has-padding-20']} xs={24}
                        lg={8}>
                            <Calendar renderCell={renderCell}  compact bordered style={{height:'100%',borderRadius:'0.75rem'}}/>
                    </Col>
                </Row>

            </Container>


        </DashboardLayout>
    );
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})

export default index;

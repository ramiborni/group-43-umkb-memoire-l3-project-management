import {Line} from "rc-progress";
import React from "react";
import InfoCard from "../../../public/InfoCard";
import {
    Col,
    Dropdown,
    Icon,
    IconButton,
    Row,
    Tag
} from "rsuite";
import UtilStyle from '../../../../styles/Utilities.module.css'

const ProjectDashboardCard = ({
    typeProject,
    projectTitle,
    priority,
    numberTasks,
    numberTasksDone,
    deadline
} : {
    typeProject: string,
    projectTitle: string,
    priority: number | null,
    numberTasks: number,
    numberTasksDone: number,
    deadline: string
}) => {
    return (
        <InfoCard>
            <Row>
                <Col xs={20}>
                    <h4>{typeProject}</h4>
                </Col>
                <Col xs={4}
                    className={
                        UtilStyle['justify-center']
                }>
                    <Dropdown style={
                            {marginTop: '-4px'}
                        }
                        renderTitle={
                            () => {
                                return <IconButton size="lg" appearance="subtle"
                                    icon={
                                        <Icon
                                    size="5x"
                                    icon="ellipsis-v"></Icon>
                                    }
                                    circle/>;
                            }
                    }>
                        <Dropdown.Item>
                            <Icon icon="detail"/>
                            Show More Details
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Icon icon="list-ul"/>
                            Show Tasks
                        </Dropdown.Item>
                    </Dropdown>

                </Col>
            </Row>
            <Row className={
                UtilStyle['has-margin-top-25']
            }>
                <Col xs={3}
                    md={1}
                    lg={3}>
                    <div style={
                        {
                            color: 'white',
                            backgroundColor: '#9891c8',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '35px',
                            height: '35px',
                            borderRadius: '100%',
                            marginTop: '-5.8px'
                        }
                    }>
                        <Icon icon="briefcase"/>
                    </div>
                </Col>
                <Col style={
                        {marginLeft: '6px'}
                    }
                    xs={20}
                    lg={priority ? 10 : 20}>
                    <h5 style={{textOverflow: 'ellipsis', whiteSpace:'nowrap',overflow:'hidden'}}>{projectTitle}</h5>
                </Col>
                {
                    (priority) ?  <Col style={
                        {textAlign: 'end'}
                    }
                    className={
                        UtilStyle['hide-only-touch']
                }>
                    <Tag color="orange">HIGH PERIORITY</Tag>
                </Col> : ''
                }
            </Row>
            <p style={
                    {fontSize: '16px'}
                }
                className={
                    UtilStyle['has-margin-top-25']
            }>
                Tasks Done : &nbsp;<strong>{numberTasksDone}/{numberTasks}</strong>
            </p>
            <div className={
                UtilStyle['has-margin-top-15']
            }>
                <Line percent={numberTasksDone/numberTasks*100}
                    strokeWidth={1}
                    strokeColor="#8b5cf6"/>
            </div>
            <div className={
                UtilStyle['has-margin-top-15']
            }>
                <Tag className={
                        `${
                            UtilStyle['has-padding-5']
                        } ${
                            UtilStyle['has-padding-left-10']
                        } ${
                            UtilStyle['has-padding-right-10']
                        }`
                    }
                    style={
                        {
                            backgroundColor: '#9891c8',
                            color: 'white'
                        }
                }>EXPECTED DEADLINE : &nbsp;
                    <strong>{deadline}</strong>
                </Tag>
            </div>

        </InfoCard>
    );
}
ProjectDashboardCard.propTypes={
    periority:null
}
export default ProjectDashboardCard;

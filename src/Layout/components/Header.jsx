import { Row, Col } from 'antd'
import {
    LeftOutlined,
    RightOutlined,
    UpOutlined,
    DeleteOutlined,
    DragOutlined,
    YoutubeFilled,
    BorderOuterOutlined,
    PlayCircleOutlined,
    PauseCircleOutlined,
    StepForwardOutlined,
    BugOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons'
import './layoutComponent.scss'
function Header() {
    return (
        <Row>
            <Row
                justify="space-between"
                style={{ minWidth: '2500px', padding: '0 20px' }}
            >
                <Row>
                    <Col className="header-list">File</Col>
                    <Col className="header-list">Edit</Col>
                    <Col className="header-list">Create</Col>
                    <Col className="header-list">Panels</Col>
                    <Col className="header-list">Window</Col>
                    <Col className="header-list">Debug</Col>
                    <Col className="header-list">Help</Col>
                </Row>
                <Row className="header-list">UserName</Row>
            </Row>
            <Row
                justify="space-between"
                style={{ minWidth: '2500px', padding: '0 20px' }}
            >
                <Row>
                    <Col className="header-list">
                        <LeftOutlined />
                    </Col>
                    <Col className="header-list">
                        <RightOutlined />
                    </Col>
                    <Col className="header-list">
                        <UpOutlined />
                    </Col>
                    <Col className="header-list">
                        <DragOutlined />
                    </Col>
                    <Col className="header-list">
                        <DeleteOutlined />
                    </Col>
                    <Col className="header-list">
                        <YoutubeFilled />
                    </Col>
                    <Col className="header-list">
                        <BorderOuterOutlined />
                    </Col>
                </Row>
                <Row>
                    <Col className="header-list">
                        <PlayCircleOutlined />
                    </Col>
                    <Col className="header-list">
                        <PauseCircleOutlined />
                    </Col>
                    <Col className="header-list">
                        <StepForwardOutlined />
                    </Col>
                    <Col className="header-list">
                        <BugOutlined />
                    </Col>
                </Row>
                <Row>
                    <Col className="header-list">
                        <UsergroupAddOutlined />
                    </Col>
                </Row>
            </Row>
        </Row>
    )
}

export default Header

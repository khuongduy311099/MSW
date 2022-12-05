import { Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom'
import './layoutComponent.scss'
import {
    HistoryOutlined,
    FileImageOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    BorderTopOutlined,
    BankOutlined,
    RobotOutlined,
    SmileOutlined,
    RadiusUpleftOutlined,
    AlignCenterOutlined,
    BranchesOutlined,
    HomeOutlined,
    HolderOutlined,
    RedditOutlined,
    CaretRightOutlined,
    GitlabOutlined,
    DingtalkOutlined,
    LikeOutlined,
} from '@ant-design/icons'
function Sidebar() {
    const list = [
        {
            id: 'rc',
            icon: HistoryOutlined,
            name: 'Recent',
        },
        {
            id: 'bg',
            icon: FileImageOutlined,
            name: 'Background',
        },
        {
            id: 'sbg',
            icon: BgColorsOutlined,
            name: 'Solid Background',
        },
        {
            id: 'ibg',

            icon: BarcodeOutlined,
            name: 'Image Background',
        },
        {
            id: 'ti',

            icon: BorderTopOutlined,
            name: 'Tile',
        },
        {
            id: 'obj',

            icon: BankOutlined,
            name: 'Object',
        },
        {
            id: 'mon',

            icon: RobotOutlined,
            name: 'Monster',
        },
        {
            id: 'npc',
            icon: SmileOutlined,
            name: 'NPC',
        },
        {
            id: 'fh',

            icon: RadiusUpleftOutlined,
            name: 'Foothold',
        },
        {
            id: 'lad',

            icon: AlignCenterOutlined,
            name: 'Ladder',
        },
        {
            id: 'rp',

            icon: BranchesOutlined,
            name: 'Rope',
        },
        {
            id: 'prt',
            icon: HomeOutlined,
            name: 'Portal',
        },
        {
            id: 'pef',

            icon: HolderOutlined,
            name: 'Particle Effect',
        },
        {
            id: 'trp',

            icon: RedditOutlined,
            name: 'Trap',
        },
        {
            id: 'bgm',

            icon: CaretRightOutlined,
            name: 'BGM',
        },
        {
            id: 'itm',

            icon: GitlabOutlined,
            name: 'Item',
        },
        {
            id: 'spc',
            icon: DingtalkOutlined,
            name: 'Special',
        },
        {
            id: 'ui',
            icon: LikeOutlined,
            name: 'UI',
        },
    ]
    const { Search } = Input
    const onSearch = (v) => {
        console.log(v)
    }
    return (
        <Col span={6}>
            <Row>
                <Search placeholder="input search text" onSearch={onSearch} />
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <Col span={8}>
                    {list.map((item, index) => (
                        <Link
                            key={index}
                            style={{ color: 'black' }}
                            to={`/${item.id}`}
                        >
                            <Row style={{ padding: '10px', fontSize: '14px' }}>
                                {
                                    <item.icon
                                        style={{
                                            fontSize: '20px',
                                            margin: '0 10px',
                                        }}
                                    />
                                }{' '}
                                {item.name}
                            </Row>
                        </Link>
                    ))}
                </Col>
                <Col span={16}></Col>
            </Row>
        </Col>
    )
}

export default Sidebar

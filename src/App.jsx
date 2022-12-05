import { Row, Col } from 'antd'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout'
import Sidebar from './Layout/components/sidebar'

const list = [
    {
        id: 'rc',
        name: 'Recent',
        listItem: [
            'https://preview.redd.it/oubnklisact51.jpg?width=1920&format=pjpg&auto=webp&s=f3843f46031406dd5141bc63997bfd05a365ca6a',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk-Lu-t-lcP4urvIVaRwCgqL--nL5supNcw&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh_fzOpVQ2rZDT0bZ9aC9QfTMGpr4HDYSVQ&usqp=CAU',
        ],
    },
    {
        id: 'bg',
        name: 'Background',
    },
    {
        id: 'sbg',
        name: 'Solid Background',
    },
    {
        id: 'ibg',
        name: 'Image Background',
    },
    {
        id: 'ti',
        name: 'Tile',
    },
    {
        id: 'obj',
        name: 'Object',
    },
    {
        id: 'mon',
        name: 'Monster',
    },
    {
        id: 'npc',
        name: 'NPC',
    },
    {
        id: 'fh',
        name: 'Foothold',
    },
    {
        id: 'lad',
        name: 'Ladder',
    },
    {
        id: 'rp',
        name: 'Rope',
    },
    {
        id: 'prt',
        name: 'Portal',
    },
    {
        id: 'pef',
        name: 'Particle Effect',
    },
    {
        id: 'trp',
        name: 'Trap',
    },
    {
        id: 'bgm',
        name: 'BGM',
    },
    {
        id: 'itm',
        name: 'Item',
    },
    {
        id: 'spc',
        name: 'Special',
    },
    {
        id: 'ui',
        name: 'UI',
    },
]
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            {list.map((item, i) => (
                <Route key={i} path={`/${item.id}`} element={<MainLayout />} />
            ))}
        </Routes>
    )
}

export default App

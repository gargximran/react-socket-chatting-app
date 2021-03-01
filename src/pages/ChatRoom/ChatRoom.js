import React, {useState} from 'react';
import { Row, Col, Drawer, Button } from 'antd'
import ChatRoomSideBar from "./ChatRoomSideBar";
import { AlignRightOutlined } from '@ant-design/icons'
import './ChatRoom.css'




const ChatRoom = () => {
    const [drawer, setDrawer] = useState(false)

    return (
        <Row>
            {
                window.innerWidth > 768 ?
                    <Col md={{span: 8}} className={'pa-18 info-bg d'}>
                        <ChatRoomSideBar></ChatRoomSideBar>
                    </Col>
                    :
                    (
                        <>
                            <Drawer
                                width={300}
                                onClose={() => setDrawer(false)}
                                visible={drawer}
                                bodyStyle={{ paddingBottom: 80, paddingTop: 50 }}

                            >
                                <ChatRoomSideBar></ChatRoomSideBar>
                            </Drawer>
                            <Button onClick={() => setDrawer(true)} type={'primary'} icon={<AlignRightOutlined />} className={'drawer_button'}></Button>
                        </>
                    )
            }


        </Row>
    )
}



export default ChatRoom;
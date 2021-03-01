import React from 'react';
import { Row, Col } from 'antd'
import ChatRoomSideBar from "./ChatRoomSideBar";


const ChatRoom = () => {
    return (
        <Row>
            <Col md={{span: 8}} className={'pa-18 info-bg'}>
                <ChatRoomSideBar></ChatRoomSideBar>
            </Col>
        </Row>
    )
}



export default ChatRoom;
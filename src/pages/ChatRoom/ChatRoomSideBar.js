import React from "react";
import RequestedMemberCard from "../../components/RequestedMemberCard";
import MemberListCard from "../../components/MemberListCard";

import { Row, Col } from 'antd'

const ChatRoomSideBar = () => {


    return (
        <Row>
            <Col xs={{span: 24}}>
                <RequestedMemberCard members={[{name: 'imran Hossain'}, {name: 'Raqkib'}]}/>
            </Col>
            <Col xs={{span: 24}}>
                <MemberListCard members={[{name: 'imran Hossain'}, {name: 'Raqkib'}]}/>
            </Col>
        </Row>

    )
}

export default ChatRoomSideBar
import React from "react";
import {Divider, Typography, Button} from "antd";
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'

const {Text } = Typography

const RequestedMemberCard = ({members}) => {
    return (
        <React.Fragment>
            <Divider>Pending Member's</Divider>
            {
                members.map(({name}, index) => (
                    <React.Fragment key={index}>
                        <Text strong>
                            <Button type={'primary'} shape={'circle'} size={'small'} icon={<CheckOutlined />}></Button>
                            <Button type={'danger'} shape={'circle'} className={'mx-10'} size={'small'} icon={<CloseOutlined />}></Button>


                            {name}
                        </Text>
                        <br></br>
                        <br></br>
                    </React.Fragment>

                ))
            }
        </React.Fragment>

    )
}

export default RequestedMemberCard
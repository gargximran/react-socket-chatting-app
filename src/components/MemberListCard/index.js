import React from "react";
import {Divider, Typography, Button} from "antd";
import {CloseOutlined} from '@ant-design/icons'

const {Text } = Typography

const MemberListCard = ({members}) => {
    return (
        <React.Fragment>
            <Divider>All Member's</Divider>
            {
                members.map(({name}, index) => (
                    <React.Fragment key={index}>
                        <Text strong>
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

export default MemberListCard
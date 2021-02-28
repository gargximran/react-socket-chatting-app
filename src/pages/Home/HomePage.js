import React, {Component} from 'react';
import { Row, Col, Input, Button, Card } from 'antd'

import './HomePage.css'

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }



    render() {
        return (


                    <Row  justify="space-around" align="middle">
                        <Col xs={{span: 1}} sm={{span: 1}} md={{span: 4}}>
                            <div className={'full-height'}></div>
                        </Col>
                        <Col xs={{span: 22}} sm={{span: 22}} md={{span: 7}}>


                            <Card title={'Create a room!'} hoverable className={'card-design'}>
                                <Input size={'large'} type={'text'} placeholder={'Room Name'} bordered={true}></Input>
                                <br />
                                <br />
                                <Input size={'large'} type={'text'} placeholder={'Your name'}></Input>
                                <br />
                                <br />
                                <Button type={'primary'}>Create Room</Button>
                            </Card>

                        </Col>

                        <Col xs={{span: 1}} sm={{span: 1}} md={{span: 4}}>
                            <div className={'full-height'}></div>
                        </Col>



                     </Row>



        );
    }
}

export default HomePage;
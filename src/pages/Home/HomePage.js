import React, {Component} from 'react';
import {Row, Col, Input, Button, Card, Typography, message} from 'antd'
import { ajax_post } from "../../helpers/ajax_request";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import './HomePage.css'

const { Text } = Typography

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            create_room_form: {
                value: {
                    name: '',
                    room_name: ''
                },
                errors: {
                    name: '',
                    room_name: ''
                },
                loading: false
            },
            redirect: ''
        }
    }


    form_handler = (event) => (
        this.setState({
            create_room_form: {
                ...this.state.create_room_form, value: {
                    ...this.state.create_room_form.value, [event.target.name]: event.target.value
                },
                errors: {
                    name: '',
                    room_name: ''
                }
            }
        })
    )

    submit_form = () => {
        const form = new FormData()
        form.append('name', this.state.create_room_form.value.name || '')
        form.append('room_name', this.state.create_room_form.value.room_name || '')

        this.setState({
            create_room_form: {
                value: {...this.state.create_room_form.value},
                errors: {
                    name: '',
                    room_name: ''
                },
                loading: true
            }
        })

        ajax_post('/api/create_room', form)
            .then(res => {
                this.setState({
                    redirect: `/${res.data.id}`
                })

            })
            .catch(err => {
                message.error(err.message)
                this.setState({
                    create_room_form: {
                        value: {...this.state.create_room_form.value},
                        errors: {...err.errors},
                        loading: false
                    }
                })
            })
    }



    render() {
        return (
            <Row justify="space-around" align="middle">
                {
                    this.state.redirect && <Redirect to={this.state.redirect} />
                }

                <Col xs={{span: 1}} sm={{span: 1}} md={{span: 4}}>
                    <div className={'full-height'}></div>
                </Col>
                <Col xs={{span: 22}} sm={{span: 22}} md={{span: 7}}>

                    <Card title={'Create a room!'} className={'card-design'}>
                        <Input size={'large'} name={'room_name'} value={this.state.create_room_form.value.room_name} onChange={(e) => this.form_handler(e)} type={'text'} placeholder={'Room Name'} bordered={true}></Input>
                        <br />
                        <Text className={'error-feedback'} type="danger">{this.state.create_room_form.errors.room_name}</Text>
                        <br/>
                        <br/>
                        <Input value={this.state.create_room_form.value.name} name={'name'} size={'large'} onChange={(e) => this.form_handler(e)} type={'text'} placeholder={'Your name'}></Input>
                        <br/>
                        <Text className={'error-feedback'} type="danger">{this.state.create_room_form.errors.name}</Text>
                        <br/>
                        <br/>
                        <Button loading={this.state.create_room_form.loading} onClick={() => this.submit_form()} type={'primary'}>Create Room</Button>
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
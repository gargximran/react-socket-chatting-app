import React, { useState } from 'react';
import {Row, Col, Input, Button, Card, Typography, message} from 'antd'
import { ajax_post } from "../../helpers/ajax_request";
import { useHistory } from 'react-router-dom'
import errorTune from '../../assets/tune/error_bleep.mp3'
import successTune from '../../assets/tune/success_beep.mp3'
import './HomePage.css'

const { Text } = Typography


const HomePage = () => {

    const history = useHistory()

    const [formValue, setFromValue] = useState({
        name: '',
        room_name: '',
        loading: false
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        room_name: ''
    })

    const formHandler = e => {
        setFromValue({
            ...formValue, [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {

        setFromValue({
            ...formValue, loading: true
        })

        const form = new FormData()
        form.append('name', formValue.name)
        form.append('room_name', formValue.room_name)

        ajax_post('/api/create_room', form)
            .then(res => {
                new Audio(successTune).play()
                message.success(res.message)
                //redirect to room after successfull request
                history.push('/'+ res.data.id)

            })
            .catch(err => {
                new Audio(errorTune).play()


                message.error(err.message)
                setFormErrors(err.errors)
                setFromValue({...formValue, loading: false})
            })
    }


    return (
        <Row justify="space-around" align="middle">
            <Col xs={{span: 1}} sm={{span: 1}} md={{span: 4}}>
                <div className={'full-height'}></div>
            </Col>
            <Col xs={{span: 22}} sm={{span: 22}} md={{span: 7}}>

                <Card title={'Create a room!'} className={'card-design'}>
                    <Input size={'large'} name={'room_name'} value={formValue.room_name} onChange={(e) => formHandler(e)} type={'text'} placeholder={'Room Name'} bordered={true}></Input>
                    <br />
                    {
                        formErrors.room_name && <Text className={'error-feedback'} type="danger">{formErrors.room_name}</Text>
                    }
                    <br/>
                    <br/>
                    <Input value={formValue.name} name={'name'} size={'large'} onChange={(e) => formHandler(e)} type={'text'} placeholder={'Your name'}></Input>
                    <br/>
                    {
                        formErrors.name && <Text className={'error-feedback'} type="danger">{formErrors.name}</Text>
                    }

                    <br/>
                    <br/>
                    <Button loading={formValue.loading} onClick={() => submitForm()} type={'primary'}>Create Room</Button>
                </Card>

            </Col>

            <Col xs={{span: 1}} sm={{span: 1}} md={{span: 4}}>
                <div className={'full-height'}></div>
            </Col>

        </Row>
    )
}

export default HomePage;
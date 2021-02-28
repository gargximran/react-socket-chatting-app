import React, {Component} from 'react';
import {Layout} from 'antd'

const {Footer} = Layout


class FooterComponent extends Component {
    render() {
        return (
            <Footer className={'pink-background'}>
                Footer component
            </Footer>
        );
    }
}

export default FooterComponent;
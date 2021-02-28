import React, {Component} from 'react';
import { PageHeader} from 'antd'
import {Link} from 'react-router-dom'

import './HeaderComponent.css'


class HeaderComponent extends Component {
    render() {
        return (
            <>
                <PageHeader
                    className="site-page-header secondary-bg"
                    ghost
                    title={<Link to={'/'}>Chat App</Link>}
                    subTitle="This is a subtitle"
                ></PageHeader>
            </>
        );
    }
}

export default HeaderComponent;
import React, {Component} from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
// import FooterComponent from "./components/Footer/FooterComponent";
import HomePage from "./pages/Home/HomePage";
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'

import 'antd/dist/antd.css'

const { Content } = Layout

class App extends Component {
    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <HeaderComponent></HeaderComponent>
                <Content>
                    <Switch>
                        <Route path={'/:meeting_id'}>
                                hello
                        </Route>
                        <Route path={'/'}>
                            <HomePage></HomePage>
                        </Route>
                    </Switch>
                </Content>

            </Layout>
        );
    }
}

export default App;
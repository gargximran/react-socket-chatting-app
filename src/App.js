import React, {Component} from 'react';
import HeaderComponent from './components/Header/HeaderComponent'
// import FooterComponent from "./components/Footer/FooterComponent";
import HomePage from "./pages/Home/HomePage";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import { Layout } from 'antd'
import { Switch, Route} from 'react-router-dom'

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
                            <ChatRoom></ChatRoom>
                        </Route>
                        <Route path={'/'} component={HomePage}></Route>
                    </Switch>
                </Content>

            </Layout>
        );
    }
}

export default App;
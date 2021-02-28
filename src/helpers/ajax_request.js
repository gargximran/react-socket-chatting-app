import axios from 'axios'
import store from '../redux/store'
import { setSession } from "../redux/states/session/actions";
import { get_token, set_session, remove_session } from "./sessions";


const base_path = 'http://localhost:5000'

export const ajax_post = (endpoint, body=null) => {



    return new Promise((resolve, reject) => {

        axios.post(base_path + endpoint, body, {
            headers: {
                'auth-token': get_token() || '',
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            set_session(response.data.session)
            store.dispatch(setSession())
            return resolve(response.data)

        }).catch(err => {
            if(err.response.data.status_code === 401){
                remove_session()
            }else{
                set_session(err.response.data.session)
                store.dispatch(setSession())
            }

            return reject(err.response.data)
        })
    })

}


export const ajax_get = (endpoint) => {

    return new Promise((resolve, reject) => {

        axios.get(base_path + endpoint, {
            headers: {
                'auth-token': get_token() || ''
            }
        }).then(response => {
            set_session(response.data.session)
            return resolve(response.data)

        }).catch(err => {
            if(err.response.data.status_code === 401){
                remove_session()
            }else{
                set_session(err.response.data.session)
            }
            return reject(err.response.data)
        })
    })

}



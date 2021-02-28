
export function set_session(session) {
    localStorage.setItem('session', JSON.stringify(session))
    return get_session()

}

export function get_session(){
    const session = localStorage.getItem('session')
    if(session){
        return JSON.parse(session)
    }
    return false
}

export function get_token(){
    if(get_session()){
        return get_session().token
    }
    return false
}

export function remove_session(){
    if(get_session()){
        localStorage.removeItem('session')
    }
}
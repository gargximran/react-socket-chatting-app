import {SET_SESSION} from "./actionType";
import { get_session } from "../../../helpers/sessions";

export const setSession = () => (
    {
        type: SET_SESSION,
        payload: get_session()
    }
)
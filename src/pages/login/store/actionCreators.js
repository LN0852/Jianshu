import axios from "axios";
import * as constants from "./constants";

const changelogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
export const changelogout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('api/login.json?account' + accout + '&password=' + password).then((res) => {
            const result = res.data.data ;
            if(result) {
                dispatch(changelogin());
            } else {
                alert('登录失败')
            }

        })
    }
}

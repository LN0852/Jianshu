// 定义常量
import * as constants from "./constants";
import {fromJS} from "immutable";
import axios from "axios";

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
//    将data转为immutable对象，reducer中操作的都是immutable , 类型要一样，不能一边是immutable , 一边是普通数组
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLevel = () => ({
    type: constants.MOUSE_LEVEL
});
export const changePage = (page) =>({
    type: constants.CHANGE_PAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
    //    直接返回一个函数
        axios.get('/api/headerList.json').then((res) => {
        //    成功
            const data = res.data;
            const action = changeList(data.data);
            //这里传进去的data是普通的数组
            dispatch(action);
        }).catch(() => {
        //    失败
            console.log('Ajax error');
        })
    }
}

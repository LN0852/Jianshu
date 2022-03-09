import * as constants from "./constants";
import {fromJS} from "immutable";
// fromjs 将js对象转为immutable 对象
// immutable 对象不能修改
const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn:false,
    page: 1,
    totalPage: 1
});
// 将this.state的数据放道redux中来管理
export default  (state = defaultState, action) => {
    // 修改focused
    //   set方法 实际上没有改变数据本身
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            //    传多个值的写法
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEVEL:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        // return state.set('change_list', false);

        //传过来的是immutable对象，现在是操作immutable对象
        // console.log(action);
        // return state;
        default:
            return state;
    }
//    返回state,使用focused的时候，就直接state.focused使用仓库中的focused
}

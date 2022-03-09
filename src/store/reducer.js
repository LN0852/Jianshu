import {combineReducers} from "redux-immutable";
// redux 中有 combineReducers ， redux-immutable中也有
// import headerReducer from '../common/header/store/reducer';
import {reducer as headerReducer } from '../common/header/store';
import  {reducer as homeReducer } from '../pages/home/store';
import  {reducer as detailReducer} from '../pages/detail/store';
import  {reducer as loginReducer} from '../pages/login/store';

// 引入header组件的reducer , 这个是全局的reducer，为防止代码都集中在一个文件中，
// 将header的数据放到header中的reducer管理

const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer,
    detail: detailReducer,
    login: loginReducer
});
// 合并小的reducer

export default reducer;

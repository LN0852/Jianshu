import {compose, createStore, applyMiddleware} from "redux";
// 创建一个redux的实列
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 添加这行代码，使用redux-devtools-extension 插件调试数据
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));


export default store;

import axios from "axios";
import * as constants from './constants';
import {fromJS} from "immutable";

const changHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});
const addHomeList = ( list , nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
});
export const getMoreList = (page) => {
    // page 是页数
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const  result = res.data.data;
            //获取数据
            dispatch(addHomeList(result,page+1));
            // console.log(result);
        }).catch(() => {
            console.log('Home组件更多的ajax请求失败...');
        })
    }
}
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
});
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const  result = res.data.data;
            const action = changHomeData(result);
            //获取数据
            dispatch(action);
        }).catch(() => {
            console.log('Home组件首页的ajax请求失败...');
        })
    }
}

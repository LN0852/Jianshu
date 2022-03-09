import axios from "axios";
import * as constants from './constants'
const changeDetail = (title , content ,id) => ({
   type:constants.CHANGE_DETAIL,
    title,
    content,
    id
//    将这些内容传出去，reducer都能接受到
});

export const getDetail = (id) => {
    return (dispatch) => {
    // 在这里写异步操作,请求接口
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data ;
            // console.log(result);
            if(id > 8) id = 8; // 防溢出
            dispatch(changeDetail(result[id-1].title,result[id-1].content,result[id-1].id))
        }).catch(() => {
            console.log('Detail组件的ajax请求失败...');
        })
    }
}

import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from '../store';
import {Link} from  'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends PureComponent {

    render() {
        const {list, page, getMoreList} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            // 用Link标签，根a标签一样的作用，优化了请求，避免了不必要的请求，点击跳转更块了
                            <Link to={'/detail/' + item.get('id')} key={index}>
                                <ListItem >
                                    <img
                                        className='pic'
                                        src={item.get('imgUrl')}
                                        alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({

    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);

import React, {PureComponent} from "react";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import List from "./components/List";
import {connect} from "react-redux";
import {actionCreators} from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
    HomeColor,
    HomeAdvert
} from './style'

class Home extends PureComponent {

    // pureComponent中集成了should性能优化
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeColor>

                {/*<div>*/}
                {/*    <HomeAdvert></HomeAdvert>*/}
                {/*</div>*/}

                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img'
                             src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F111G5133543%2F15111G33543-1.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649340702&t=339cfa52e6f9f8f23649d1db01f06057"
                             alt=""/>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                    {
                        this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                    }

                </HomeWrapper>
            </HomeColor>
        )
    }

//    组件挂载（render）完后执行这个生命周期
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    // 组件即将销毁的时候执行这个生命周期
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    //给window绑定时间监听
    //    组件移除的时候，要去掉这个监听
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            //    用一个dom看位置，> 500 显示返回顶部
            const action = actionCreators.toggleTopShow(true);
            dispatch(action);
        } else {
            const action = actionCreators.toggleTopShow(false);
            dispatch(action);
        }
    }
});
export default connect(mapState, mapDispatch)(Home);
// 一个参数是用于传值的，第二个参数是用于改变数据的

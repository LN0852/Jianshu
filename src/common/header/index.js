import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from  'react-router-dom';
// connect 使用一个用于接受Provider传入数据的方法
import {CSSTransition} from "react-transition-group";
import {actionCreators} from "./store";
import {actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";
import {changelogout} from "../../pages/login/store/actionCreators";

// 引入HeaderWrapper组件

class Header extends Component {

    getListArea() {
        const {
            focused,
            list,
            page,
            mouseIn,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;
        const newList = list.toJS(); // 将immutable转为js数组
        const pageList = [];
        // console.log('totalpage = ' + totalPage);
        // list 的分页 , 要先用ajax后，才分页，不然list都是undefined , 页面渲染先后的问题
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    //    这里的key 有报错 == > 因为ajax请求没出来，list===null ，
                )
            }
        }
        // 结构赋值，将this.props中的focused list 赋值给focused,list
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage , this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}}
                               className="iconfont spin">&#xe626;</i>换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {/*取出list中的数据，循环展示*/}
                        {
                            pageList
                        }

                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur, login,logout} = this.props;
        return (
            //使用HeaderWrapper组件
            <HeaderWrapper>
                <Link to='/'>
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            {/*我们使用了redux映射focused到props中了*/}
                            {/*timeout 动画时长*/}
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                            {/*onFocus 鼠标聚焦，onBlur ， 鼠标失去焦点事件*/}
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                        {this.getListArea()}
                        {/*    这个搜索框给input的聚焦是一样的，都是使用focused来控制*/}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            <i className="iconfont">&#xe708;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}
//下面这两个方法是connect将当前组件与store连接起来的两个方法
// mapStateToProps 是连接 state里面的状态，mapDispatchToProps是连接store.dispatch的
const mapStateToProps = (state) => {
    // 数据映射到props中 , 这样就把reducer中的数据，映射到了这个组件中
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])
        //    state.get('header').get('focused')等价
        //    immutable 对象，用get调用对应的数据
        //    focused 是 header 中的
    }
}
const mapDispatchToProps = (dispatch) => {
    // 改变state里边的数据 ，
    return {
        handleInputFocus(list) {
            // 获取list , 如果list有值，就不用发Ajax请求了
            if(list.size === 0 ){
                dispatch(actionCreators.getList());
            }
            // 派发两个action,下面是控制列表的显示，上面是处理异步的Ajax
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLevel());
        },
        handleChangePage(page, totalPage,spin) {
            // 用一个正则表达式，将非数字的替换成空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            } else {
                originAngle = 0 ;
            }
            // console.log('rotate('+(originAngle + 360)+'deg)');
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1)); // 将数据发给redux
            } else {
                dispatch(actionCreators.changePage(1)); // 将数据发给redux
            }
            //
        },
        logout() {
            dispatch(loginActionCreators.changelogout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
// 路由中的一个组件
import {actionCreators} from './store';
import {
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton,
    LoginLog,
    LoginTitle
} from './style';

class Login extends PureComponent {


    render() {
        const {loginStatus} = this.props;
        // console.log(loginStatus);
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>
                            <LoginLog>登 录</LoginLog>
                        </LoginTitle>
                        <LoginInput placeholder='手机号或邮箱' ref={(input) => {
                            this.account = input
                        }}></LoginInput>
                        <LoginInput placeholder='密码' type='password' ref={(input) => {
                            this.password = input
                        }}></LoginInput>
                        {/*ref innerRef*/}
                        <LoginButton onClick={() => this.props.login(this.account, this.password)}>登录</LoginButton>

                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'></Redirect>
            //    跳转回首页
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});
export default connect(mapState, mapDispatch)(Login);

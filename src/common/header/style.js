import styled from "styled-components";
import logoPic from '../../statics/logo.png'
// 用这种方式引入图片，防止路径出错
export const HeaderWrapper = styled.div`
  // 创建一个组件，name: HeaderWrapper , 其实就是个div , 也就是文件后面的内容 ,以下组件的构造同理
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 999;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto ;
`;
export const Logo = styled.div`
  position: absolute; // 子绝父相
  top: 0;
  left: 0;
  display: block; // 转块级
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;
export const  Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
  //background: red;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
  //  组件是NavItem，同时使用了left 样式
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    //height: 30px; 
    border-radius: 15px;
    //background: red;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
  //  指的是，NavSearch 这个组件下的placeholder属性
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s linear;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0 , 0 ,.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 3px;
    transition: all .5s linear;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block; // 转块
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
  color: #787878;
  cursor: pointer;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div `
  float: right;
  line-height: 38px;
  margin-top: 9px;
  padding: 0 20px;
  margin-right: 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

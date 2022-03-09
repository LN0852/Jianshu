import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
  text-align: center;
  font-size: 14px;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 400px;
  margin: 160px auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
`;
export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, .1);
  vertical-align: middle;
  color: #777;
  box-sizing: border-box;
`;
export const LoginButton = styled.div`
  background: #3194d0;
  margin-top: 40px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  box-sizing: border-box;
`;
export const LoginTitle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
`;
export const LoginLog = styled.div`
  width: 45px;
  height: 100%;
  display: inline-block;
  line-height: 40px;
  text-align: center;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
`;



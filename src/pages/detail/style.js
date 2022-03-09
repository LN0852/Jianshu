import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;

  .text-link {
    color: inherit;
    text-decoration: inherit;
    cursor: default;
  }
`;

export const Header = styled.div`
  margin: 50px 0 10px 0;
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
  text-rendering: optimizelegibility;
`;
export const DetailColor = styled.div`
  width: 780px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 30px 100px 30px;
  background-color: white;
`;
export const Author = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  //background-color: red;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  box-sizing: border-box;
`;
export const AuthorItem = styled.div`
  width: 50%;
  height: 50px;
  //background-color: red;

  img {
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    min-width: 50px;
    min-height: 50px;
    width: 50px;
    height: 50px;

  }
`;
export const Content = styled.div`
  color: #2f2f2f;

  img {
    width: 100%;
  }

  p {
    margin-bottom: 20px;
    word-break: break-word;
    margin-top: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 16px;
    line-height: 30px;
    -webkit-text-decoration: none;
  }

  b {
    font-weight: bold;
  }
`;

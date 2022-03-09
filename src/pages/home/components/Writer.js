import React, {PureComponent} from "react";
import {
    WriterWrapper,
    WriterItem
} from '../style'
import {Link} from "react-router-dom";

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <Link to={'/detail/1'}>
                    <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic153.nipic.com%2Ffile%2F20180115%2F25061423_173024994000_2.jpg&refer=http%3A%2F%2Fpic153.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649396649&t=37cb318bd96cbbd02e6722498a93a6e5"
                        alt=""/>
                </Link>
            </WriterWrapper>
        )
    }
}

export default Writer;

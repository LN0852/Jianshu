import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from './store';
import {Link, withRouter} from "react-router-dom";
import {
    DetailWrapper,
    Header,
    Content,
    DetailColor,
    Author,
    AuthorItem
} from './style';

class Detail extends PureComponent {


    render() {
        return (
            <DetailWrapper>

                <Link to={'/detail/' + this.props.id} className='text-link'>
                    <DetailColor>
                        <Header>{this.props.title}</Header>
                        <Author>
                            <AuthorItem>
                                {/*<img src="https://upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>*/}
                            </AuthorItem>
                        </Author>
                        <Content
                            dangerouslySetInnerHTML={{__html: this.props.content}}>
                            {/*防止标签转译*/}
                        </Content>
                    </DetailColor>
                </Link>

            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
        //    拿到一个详情页的ID
    }
}

const mapState = (state) => ({
    id: state.getIn(['detail', 'id']),
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});
export default connect(mapState, mapDispatch)(withRouter(Detail));

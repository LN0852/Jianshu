import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {
    TopicWrapper,
    TopicItem
} from '../style'
import {Link} from "react-router-dom";

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => (
                        <Link to={'/detail/1'}>
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic'
                                     src={item.get('imgUrl')}
                                     alt=""
                                />
                                {item.get('title')}
                            </TopicItem>
                        </Link>
                    ))
                }


            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
//    拿数据
//     list: state.get('home').get('topicList')
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);

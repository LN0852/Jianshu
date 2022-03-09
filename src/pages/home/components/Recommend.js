import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {
    RecomoendWrapper,
    RecommendItem
} from '../style'
import {Link} from "react-router-dom";

class Recommend extends PureComponent {
    render() {
        return (
            <RecomoendWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <Link to='/detail/1'  key={item.get('id')}>
                                <RecommendItem imgUrl={item.get('imgUrl')} >
                                </RecommendItem>
                            </Link>
                        )
                    })

                }


            </RecomoendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
});
export default connect(mapState, null)(Recommend);

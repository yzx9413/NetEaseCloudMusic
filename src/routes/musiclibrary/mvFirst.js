import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';

import Style from './style.css';

class mvFirst extends Component {
    componentDidMount() {
        this.props.getMvListData()
    }
    render() {
        const { friendList } = this.props;
        return (
            <div className={Style.friend}>
                <ul>{
                    (friendList || []).map((item, index) => {
                        return <li key={index}>
                            <h4>{item.artistName}<span>发布视频:</span></h4>
                            <h5>{item.briefDesc}</h5>
                            <div><img src={item.cover} alt="" /></div>
                            <p><span>播放次数:{item.playCount}</span>
                                <span><Icon type="heart" />:{item.artistId}</span></p>
                        </li>
                    })
                }</ul>
            </div>
        );
    }
}
const a = (state) => {
    return {
        friendList: state.demo.mvFirstData.data
    }
}
const b = dispatch => {
    return {
        getMvListData: type => {
            dispatch({
                type: 'demo/mvFirst', payload: type
            })
        }
    }
}
export default connect(a, b)(mvFirst);

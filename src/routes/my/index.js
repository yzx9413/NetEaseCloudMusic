import React, { Component } from 'react';
import { connect } from 'dva';

import Style from './style.css';

// @connect(({ play }) => {
//     return play
// }, dispatch => {
//     return {
//         getUserList: id => {
//             dispatch({
//                 type: 'demo/userList',
//                 payload: id
//             })
//         }
//     }
// })

class Mypage extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getSongsData(id);
    }
    render() {
        // console.log(this.props.match)
        const { userListData } = this.props;
        return (
            <div className={Style.listData}>
                <h2><b>我的歌单</b></h2>
                <ul>{
                    (userListData || []).map((item, index) => {
                        return <li key={index}>
                            <img src={item.coverImgUrl} alt="" />
                            <div><h4>{item.name}</h4><span>{item.trackCount}首</span></div>
                        </li>
                    })
                }</ul>
            </div>
        );
    }
}
const a = (state) => {
    return {
        userListData: state.demo.userSongsListData.playlist
    }
}
const b = dispatch => {
    return {
        getSongsData: type => {
            dispatch({
                type: 'demo/userList', payload: type
            })
        }
    }
}
export default connect(a, b)(Mypage);
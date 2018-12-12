import React, { Component } from 'react';
import { connect } from 'dva';

import {Icon} from 'antd';

// @connect(state=>{
//     console.log(state);
//     return {

//     }
// },dispatch=>{
//     return {
//         arres:()=>{
//             type:'demo/getData'

//         }
//     }
// })

class Video extends Component {
    componentDidMount() {
        this.props.getMvListData()
    }
    render() {
        const { mvList } = this.props;
        return (
            <div>
                <b>MV精选</b>
                <ul>{
                    (mvList || []).map((item, index) => {
                        return <li key={index}>
                            <div><img style={{ width: '100%', height: 'auto',borderRadius:'15px' }} src={item.picUrl} alt="" /></div>
                            <h2 style={{fontSize:'.15rem',marginTop:'2%',textIndent:'.2rem',fontWeight:'bold'}}>{item.name}</h2>
                            <div style={{fontSize:'.12rem',display:'flex',justifyContent:'space-around'}}>
                                <span><Icon type="user" />:{item.artistName}</span>
                                <span><Icon type="message" />:{item.playCount}</span>
                                <span><Icon type="like" />:{item.duration}</span>
                            </div>
                        </li>
                    })
                }</ul>
            </div>
        );
    }
}
const a = (state) => {
    return {
        mvList: state.demo.MvData.result
    }
}
const b = dispatch => {
    return {
        getMvListData: type => {
            dispatch({
                type: 'demo/getData', payload: type
            })
        }
    }
}
export default connect(a, b)(Video);
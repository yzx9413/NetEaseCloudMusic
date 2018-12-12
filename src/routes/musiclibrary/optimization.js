import React, { Component } from 'react';
import { connect } from 'dva';

import Style from './style.css';

class Optimization extends Component {
    componentDidMount() {
        this.props.getMvListData()
    }
    render() {
        const { djprogramList } = this.props;
        return (
            <div className={Style.djList}>
            <h2>今日优选</h2>
                <ul>{
                    (djprogramList || []).map((item, index) => {
                        return <li key={index}>
                            <img src={item.picUrl} alt="" />
                            <div><h4>{item.name}</h4><span>{item.copywriter}</span></div>
                        </li>
                    })
                }</ul>
            </div>
        );
    }
}
const a = (state) => {
    return {
        djprogramList: state.demo.DjprogramData.result
    }
}
const b = dispatch => {
    return {
        getMvListData: type => {
            dispatch({
                type: 'demo/djprogram', payload: type
            })
        }
    }
}
export default connect(a, b)(Optimization);
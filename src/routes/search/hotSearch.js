import React, { Component } from 'react';

import { Tag } from 'antd-mobile';
import { connect } from 'dva';

import Style from './style.css';

class HotSearch extends Component {
    componentDidMount(){
        this.props.getSearchHotData();
    }
    render() {
        const {hotSearchData}=this.props;
        if(!hotSearchData){return null};
        const {hots}=hotSearchData;
        return (
            <div className={Style.hotSearch}>
                <h2>热门搜索</h2>{
                    hots.map((item,index)=>{
                        return <Tag key={index}>{item.first}</Tag>
                    })
                }</div>
        );
    }
}
const a = (state) => {
    return {
        hotSearchData: state.demo.searchHotData.result
    }
}
const b = dispatch => {
    return {
        getSearchHotData: type => {
            dispatch({
                type: 'demo/SearchHot', payload: type
            })
        }
    }
}
export default connect(a,b)(HotSearch);

import React, { Component } from 'react';
import { connect } from 'dva';
import Songs from './songsList';
import Auto from './autoPlay';

import Style from './style.css'

class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData()
  }
  render() {
    const { songList } = this.props;
    return (
      <div className={Style.list}>
        <Auto></Auto>
        <h4><b>每日推荐歌单</b></h4>
        <ul>{
          (songList || []).map((item, index) => {
            return <li key={index} style={{ width: '33%', height: 'auto', float: 'left', padding: '5px' }}>
              <img style={{ width: '100%', height: 'auto' }} src={item.picUrl} alt="" />
              <span>{item.name}</span>
            </li>
          })
        }</ul>
        <Songs></Songs>
      </div>
    );
  }
}
const a = (state) => {
  return {
    songList: state.demo.RecommendData.result
  }
}
const b = dispatch => {
  return {
    getRecommendData: type => {
      dispatch({
        type: 'demo/recommendResource', payload: type
      })
    }
  }
}
export default connect(a, b)(Recommend);

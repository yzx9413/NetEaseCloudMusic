import React, { Component } from 'react';
import { connect } from 'dva';

class SongsList extends Component {
    componentDidMount() {
        this.props.getSongsData()
    }
    render() {
        return (
            <div>
                <h4><b>每日推荐歌曲</b></h4>
                SongsList
            </div>
        );
    }
}
const a = (state) => {
    if(state.code===200){
        // state.code==400
    }
    return {
    //   songList: state.demo.RecommendData.result
    }
  }
  const b = dispatch => {
    return {
        getSongsData: type => {
        dispatch({
          type: 'demo/getSongs', payload: type
        })
      }
    }
  }
export default connect(a,b)(SongsList);

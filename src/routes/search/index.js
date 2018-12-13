import React, { Component } from 'react';
import { Icon, SearchBar } from 'antd-mobile';
import HotSearch from './hotSearch';

import Style from './style.css';
import { connect } from 'dva';

class Search extends Component {
    componentDidMount() {
        // this.props.getSearchList(null);
        let con=null;
        this.props.getSearchList(con)
    }
    render() {
        const { searchData } = this.props;
        if (!searchData) { return null }
        const { songs } = searchData;
        return (
            <div>
                <header className={Style.head}>
                    <Icon type="left" size='24px' onClick={() => {
                        this.props.history.go(-1)
                    }} />
                    <SearchBar placeholder="请输入搜索内容" maxLength={8} className={Style.info}  onChange={(value)=>{
                        // let str=;
                        // console.log(value);
                        this.props.getSearchList(value);
                    }} />
                </header>
                <section>
                    <HotSearch></HotSearch>
                    <div className={Style.content}>
                        <h2>单曲</h2>
                        <ul>{
                            songs.map((item, index) => {
                                return <li key={index}>
                                    <h4>{item.name}</h4>
                                    <div>
                                        <span>{item.artists[0].name}</span>
                                        <span>{item.album.name}</span>
                                    </div>
                                </li>
                            })
                        }</ul>
                    </div>
                </section>
            </div>
        );
    }
}
const a = (state) => {
    return {
        searchData: state.demo.searchData.result
    }
}
const b = dispatch => {
    return {
        getSearchList: type => {
            dispatch({
                type: 'demo/SearchList', payload: type
            })
        }
    }
}
export default connect(a, b)(Search);
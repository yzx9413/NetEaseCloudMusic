import React, { Component } from 'react';
import { connect } from 'dva';

import { Carousel } from 'antd';

import Style from './style.css';

class AutoPlay extends Component {
    componentDidMount() {
        this.props.getBanner();
    }
    render() {
        const { bannerData } = this.props;
        return (
            <div className={Style.Banner}>
                <Carousel autoplay>{
                    (bannerData || []).map((item, index) => {
                        return <div key={index}>
                            <img src={item.imageUrl} alt="" />
                        </div>
                    })
                }</Carousel>
            </div>
        );
    }
}
const a = (state) => {
    return {
        bannerData: state.demo.BannerData.banners
    }
}
const b = dispatch => {
    return {
        getBanner: type => {
            dispatch({
                type: 'demo/Banner', payload: type
            })
        }
    }
}
export default connect(a, b)(AutoPlay);
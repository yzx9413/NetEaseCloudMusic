import React, { Component } from 'react';

import { connect } from 'dva';
import { Drawer } from 'antd';

import Icon1 from '../../assets/headIcon1.png';

class Side extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getUserInfo();
    }

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { userData } = this.props;
        const User = userData ? userData : {};
        return (
            <div>
                <div onClick={this.showDrawer}><img src={Icon1} alt="" /></div>
                <Drawer width='240' title={
                    <div style={{width:'100%',background:`url(${User.backgroundUrl})`,backgroundSize:'100%',color:'#fff',textIndent:'.2rem'}}>
                    <div style={{fontSize:'.16rem',lineHeight:'.3rem'}}>{User.nickname}</div>
                    <img style={{width:'50%',height:'auto',borderRadius:'50%',margin:'10px 25%'}} src={User.avatarUrl} alt=""/>
                    <div>{User.signature}</div>
                    <span>等级：</span><span>6</span></div>
                }
                    // title={'',}
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}>
                    <p>我创建的歌单:{User.playlistCount}个</p>
                    <p>我的消息</p>
                    <p>会员中心</p>
                    <p>商城</p>
                    <p>游戏推荐:明日之后</p>
                    <p>在线听歌免流量</p>
                    <p>我的好友</p>
                    <p>附近的人</p>
                    <p>听歌识曲</p>
                    <p>定时停止播放</p>
                    <p>扫一扫</p>
                    <p>音乐闹钟</p>
                    <p>驾驶模式</p>
                    <p>亲子频道</p>
                    <p>小冰电台</p>
                    <p>音乐云盘</p>
                    <p>优惠卷</p>
                    <p>加入网易音乐人</p>
                </Drawer>
            </div>
        );
    }
}
const a = (state) => {
    return {
        userData: state.demo.userInfoData.profile
    }
}
const b = dispatch => {
    return {
        getUserInfo: type => {
            dispatch({
                type: 'demo/userInfo', payload: type
            })
        }
    }
}
export default connect(a, b)(Side);
import React, { Component } from 'react';
// import { connect } from 'dva';

import { NavBar, Icon, InputItem, Button } from 'antd-mobile';

import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';

import Style from './style.css';
import { connect } from 'dva';

// @connect(state => {
//     console.log(state)
//     return {
//         login: state.login
//     }
// }, dispatch => {
//     return {
//         login: payload => {
//             console.log('payload...', payload)
//             dispatch({
//                 type: '/login',
//                 payload
//             })
//         }
//     }
// })

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // phone:'',password:''
            phone: '17338109507', password: 'qqws21..'
        }
        this.submit = this.submit.bind(this);
    }
    static defaultProps = { 
        UserId: 18
    }

    submit() {
        console.log(this.state.phone, this.state.password)
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.state.phone)) { alert('请输入正确的手机号') }
        let user = [this.state.phone, this.state.password];
        // console.log(this.props)
        console.log(this.props.userData);
        this.props.getUser(user)
    }

    render() {
        return (<div>
            <NavBar className={Style.head} mode="light" icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.go(-1)}>手机号登陆</NavBar>
            <div className={Style.info}>
                <InputItem placeholder="请输入手机号" onChange={(e) => { this.setState({ phone: e }) }}>
                    <div style={{ backgroundImage: `url(${User1})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                </InputItem>
                <InputItem type="password" placeholder="请输入密码" onChange={(e) => { this.setState({ password: e }) }}>
                    <div style={{ backgroundImage: `url(${User2})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                </InputItem>
            </div>

            <Button className={Style.btn} onClick={() => {
                //跳转登陆页面
                this.submit()
                this.props.history.push('/main/my');//跳转用户歌曲页面
            }}>登录</Button>
        </div>);
    }
}
const a = (state) => {
    return {
        userData: state.demo.userLoginData.profile
    }
}
const b = dispatch => {
    return {
        getUser: type => {
            dispatch({
                type: 'demo/userLogin', payload: type
            })
        }
    }
}
export default connect(a, b)(UserInfo);

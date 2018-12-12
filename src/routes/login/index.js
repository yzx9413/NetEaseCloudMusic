import React, { Component } from 'react';

import { Button, WingBlank, Flex } from 'antd-mobile';
import Style from './style.css';

import bar from '../../assets/bar.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';

class Login extends Component {
    render() {
        return (
            <div className={Style.bg}>
                <div className={Style.banner}>
                    <img src={bar} alt="" />
                </div>
                <div className={Style.loginBtn}>
                    <WingBlank>
                        <Button className={Style.MarginTop} onClick={()=>{
                            //跳转登陆页面
                            this.props.history.push('/user')
                        }}>手机号登录</Button>
                        <Button className={Style.MarginTop}>注册</Button>
                    </WingBlank>
                    <h5 className={Style.small}>游客试用</h5>
                </div>
                <div className={Style.navLink}>
                    <h4 className={Style.textAlign}>其他登陆方式</h4>
                    <Flex>
                        <Flex.Item className={Style.navCon}><div align="center"><img src={logo1} alt="" /></div><span>微信</span></Flex.Item>
                        <Flex.Item className={Style.navCon}><div align="center"><img src={logo2} alt="" /></div><span>QQ</span></Flex.Item>
                        <Flex.Item className={Style.navCon}><div align="center"><img src={logo3} alt="" /></div><span>微博</span></Flex.Item>
                        <Flex.Item className={Style.navCon}><div align="center"><img src={logo4} alt="" /></div><span>网易邮箱</span></Flex.Item>
                    </Flex>
                </div>

            </div>
        );
    }
}

export default Login;

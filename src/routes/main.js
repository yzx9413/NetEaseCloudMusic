import React, { Component } from 'react';
import { NavLink } from 'dva/router';
import RouterView from '../router/RouteView';

import Drawer from './component/drawer';

import Style from './main.css';

import Icon2 from '../assets/headIcon2.png';
import Icon3 from '../assets/headIcon3.png';
import Icon4 from '../assets/headIcon4.png';
import Icon5 from '../assets/headIcon5.png';

class Main extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <header className={Style.header}>
          <Drawer></Drawer>
          <div className={Style.linkhref}>
            <NavLink to='/main/my' replace>
              <span><img src={Icon2} alt="" /></span>
            </NavLink>
            <NavLink to='/main/musiclibrary' replace>
              <span><img src={Icon3} alt="" /></span>
            </NavLink>
            <NavLink to='/main/video' replace>
              <span><img src={Icon4} alt="" /></span>
            </NavLink>
          </div>
          <span onClick={() => {
            this.props.history.push('/search')
          }}><img src={Icon5} alt="" /></span>
        </header>
        <section>
          <RouterView routes={routes}></RouterView>
        </section>
      </div>
    );
  }
}

export default Main;
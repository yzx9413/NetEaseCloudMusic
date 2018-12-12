import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';


import Optimization from './optimization';
import Recommend from './recommend';
import Mvfirst from './mvFirst';

class Tabesg extends Component {
    render() {
        const tabs = [{ title: '推荐', component: '111' }, { title: '朋友', component: '22' }, { title: '电台', component: '333' }];
        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} animated='true' style={{ background: '#DF4238' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <Recommend></Recommend>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <Mvfirst></Mvfirst>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <Optimization></Optimization>
                    </div>
                </Tabs>
            </div >
        );
    }
}

export default Tabesg;

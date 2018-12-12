import React, { Component } from 'react';

// import { getRecommendList } from '../../services/index';

import Tabes from './tabes';

/*@connect(state => {
 //   console.log('getRecommendList...', state.getRecommendList)
    return {
        getRecommendList: state.getRecommendList
    }
}, dispatch => {
    return {
        getRecommendList: payload => {
            console.log('payload...', payload)
            dispatch({
                type: 'index/getRecommendList',
                payload
            })
        }
    }
})*/

class MusicLibrary extends Component {
    
    render() {
        return (
            <div>
                <Tabes></Tabes>
            </div>
        );
    }
}

export default MusicLibrary;

import request from '../utils/request';
export * from './musicLlbrary';

const host = /localhost/.test(window.localStorage.host) ? 'http://123.206.55.50:14000' : '';

//登陆接口
export function login(params) {
    console.log('params...',params)
    return request(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
}

// 获取获取用户歌单
export function getUserList(id) {
    return request(`${host}/user/playlist?uid=${id}/`)
    // http://123.206.55.50:14000/user/playlist?uid=388093135
}

// 获取获取推荐歌单
export function getRecommendList() {
    return request(`${host}/personalized`)
    // http://123.206.55.50:14000/user/playlist?uid=388093135
}

//一级路由页面
import Main from '../routes/main';
import Login from '../routes/login';
//二级路由页面
import MusicLibrary from '../routes/musiclibrary';
import Mypage from '../routes/my';
import Video from '../routes/video';
import User from '../routes/login/userinfo';
import Search from '../routes/search';
//三级路由页面

export default {
    routes: [{
        path: '/login',
        component: Login
    }, {
        path: '/user',
        component: User
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/main',
        component: Main,
        children: [{
            path: '/main/musiclibrary',
            component: MusicLibrary
        }, {
            path: '/main/my',
            component: Mypage
        }, {
            path: '/main/video',
            component: Video
        }]
    }, {
        path: '/',
        redirect: '/login'
    }]
}
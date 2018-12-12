export default {
    namespace: 'demo',
    state: {
        //放容器存数据
        userLoginData: [],
        userSongsListData: [],
        MvData: [],
        RecommendData: [],
        DjprogramData: [],
        mvFirstData: [],
        songsData: [],
        userInfoData: [],
        BannerData: [],
        searchData: [],
        searchHotData: []
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        //用户登陆
        * userLogin({ payload }, { call, put }) {
            let res = yield call(() => {
                // http://123.206.55.50:14000/login/cellphone?phone=${}&password=${}
                return fetch(`http://123.206.55.50:14000/login/cellphone?phone=${payload[0]}&password=${payload[1]}`)
                    .then(res => res.json())
                    .then(body => body)
            })
            console.log(res)
            if (res.code === 200) {
                yield put({
                    type: 'getUserlogin',
                    payload: res
                })
            }
        },
        //用户数据
        * userList({ payload }, { call, put }) {
            console.log(payload)
            let res = yield call(() => {
                return fetch(`http://123.206.55.50:14000/user/playlist?uid=388093135`)
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getUserSongsList',
                payload: res
            })
        },
        //用户信息
        * userInfo({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch(`http://123.206.55.50:14000/user/detail?uid=388093135`)
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getUserInfo',
                payload: res
            })
        },
        // 精选数据
        * getData({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch('http://123.206.55.50:14000/personalized/mv')
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getmv',
                payload: res
            })
        },
        //推荐功能
        * recommendResource({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch('http://123.206.55.50:14000/personalized')
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getRecommend',
                payload: res
            })
        },
        // 热歌推荐
        * djprogram({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch('http://123.206.55.50:14000/personalized/djprogram')
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getDjprogram',
                payload: res
            })
        },
        // 视频推荐
        * mvFirst({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch('http://123.206.55.50:14000/mv/first')
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getMvFirst',
                payload: res
            })
        },
        // 轮播图跑马灯
        * Banner({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch('http://123.206.55.50:14000/banner')
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getBanner',
                payload: res
            })
        },
        // 搜索功能
        * SearchList({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch(`http://123.206.55.50:14000/search?keywords=${payload}`)
                    .then(res => res.json())
                    .then(body => body)
            })
            if (res.code === 200) {
                yield put({
                    type: 'getSearchList',
                    payload: res
                })
            }

        },
        // 热搜功能
        * SearchHot({ payload }, { call, put }) {
            let res = yield call(() => {
                return fetch(`http://123.206.55.50:14000/search/hot`)
                    .then(res => res.json())
                    .then(body => body)
            })
            yield put({
                type: 'getSearchHot',
                payload: res
            })
        },
        //     * getSongs({ payload }, { call, put }) {
        //        let res = yield call(() => {
        //            return fetch('http://123.206.55.50:14000/recommend/songs?uid=388093135')
        //                .then(res => res.json())
        //                .then(body => body)
        //        })
        //        console.log(res);
        //        yield put({
        //            type: 'getSongs',
        //            payload: res
        //        })
        //    }
    },

    reducers: {
        getUserlogin(state, { payload }) {
            return { ...state, userLoginData: payload }
        },
        getUserSongsList(state, { payload }) {
            return { ...state, userSongsListData: payload }
        },
        getUserInfo(state, { payload }) {
            return { ...state, userInfoData: payload }
        },
        getmv(state, { payload }) {
            return { ...state, MvData: payload }
        },
        getRecommend(state, { payload }) {
            return { ...state, RecommendData: payload }
        },
        getDjprogram(state, { payload }) {
            return { ...state, DjprogramData: payload }
        },
        getMvFirst(state, { payload }) {
            return { ...state, mvFirstData: payload }
        },
        getBanner(state, { payload }) {
            return { ...state, BannerData: payload }
        },
        getSearchList(state, { payload }) {
            return { ...state, searchData: payload }
        },
        getSearchHot(state, { payload }) {
            return { ...state, searchHotData: payload }
        },
        // getSongs(state, { payload }) {
        //     return { ...state, songsData: payload }
        // },
    },

};
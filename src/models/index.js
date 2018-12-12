import { routerRedux } from 'dva/router';
import { login } from '../services/index';
import { getToken, setToken } from '../utils/user';

export default {
    namespace: 'index',
    state: {//放容器
        loginData: {}
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname !== 'login') {
                    if (!getToken()) {
                        dispatch(routerRedux.replace({
                            pathname: '/login',
                        }))
                    }
                }
            })
        }
    },
    effects: {//请求数据
        * login({ payload }, { call, put }) {
            let res = yield call(login, payload)
            setToken(res.data.account.id);
            yield put({
                type: 'updateState',
                payload: res.data
            }); yield put(routerRedux.replace({
                pathname: '/'
            }))
        }

    },
    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload }
        }
    }
}
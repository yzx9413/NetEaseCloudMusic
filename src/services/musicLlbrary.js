import { getRecommendList } from '../services/index';

export default {
    namespace: 'nusiclibrary',
    state: {
        recommendListData: []
    },
    effects: {
        *getRecommendList({ payload }, { call, put }) {
            let res = yield call(getRecommendList);
            console.log('recommedndata...', res);
            yield put({
                type: 'updataState',
                payload: res.data
            })
        }
    },
    reducers: {
        updataState(state, action) {
            console.log('action...', action);
            return { ...state, ...action.payload }
        }
    }
}
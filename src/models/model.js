import lodash from 'lodash';

const setDelay = (payload) => {
  const millisecond = 3000;
  return new Promise((resolve, reject)=>{
    if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
    setTimeout(()=> {
      resolve(`我延迟了${millisecond}毫秒后输出的, 输出 ${JSON.stringify(payload)}`)
    }, millisecond)
  })
}
export default {
  namespace: 'sample',
  state: {
    data: {
      some: 'initial state',
    },
  },
  reducers: {
    saveData(state, {payload: data}) {
      return lodash.merge(state, {
        item: data,
      });
    },
  },
  effects: {
    *fetchData(action, { call, put, fork, select }) {
      let data = yield call(setDelay, action.payload);
      yield call(console.log, data);
      yield put({type: "saveData", payload: data});
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log(pathname, "subscriptions");
      });
    },
  },
}

import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { itemnumber } from '../reducers/itemnumber';
import { baceUrlreducer } from '../reducers';
import { PageNumber } from '../reducers/PageNumber';

import dataFetchPosts from './dataFetchPosts'


export default function* mySaga() {
    yield all([
        dataFetchPosts()
    ])
}
// function* pageFetching() {

//     const dataFrom = {
//         lm: itemnumber,
//         pg: PageNumber,
//         tp: 1
//     }


//     try {
//         const res = yield axios.post(`${baceUrlreducer}/post/search`, JSON.stringify(dataFrom), {
//             headers: {
//                 "t": action.payload,

//                 "content-type": "application/json; charset=utf-8 "
//             }
//         })
//         yield put(res.data.result)
//         // dataFetch = res.data.result
//         console.log(res.data.result)
//     } catch (error) {
//         dataFetch = {}
//     }
// }

// function* mySaga() {

//     yield takeEvery("FetchData", pageFetching)
// }

// export default mySaga;
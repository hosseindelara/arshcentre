import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { baceUrlreducer } from '../reducers';
import { itemnumber } from '../reducers/itemnumber';
import { PageNumber } from '../reducers/PageNumber';

const dataFetch = () => {
    const dataFrom = {
        lm: 12,
        pg: 1,
        tp: 1
    }


    return axios.post(`${baceUrlreducer}/post/search`, JSON.stringify(dataFrom), {
        headers: {
            "t": '9ZieBz%2BgYR93%2BUaEUOFkkhJ7KjISbz%2F6Tt9svuoYS5A%3D',

            "content-type": "application/json; charset=utf-8 "
        }
    })
        .then(res => {
            console.log(res)
            return res
        })
        .catch(error => {
            console.log(console.log(res))
            return error
        })
}

function* dataPost(action) {

    try {
        const data = yield call(dataFetch)


        yield put({ type: "POST_SUCCESS", postData: data })

        console.log(data)


    } catch (error) {
        yield put({ type: 'POST_FAILD', message: error.message })
    }
}

function* dataFetchPosts() {
    yield takeEvery('GET_DATAPOST_REQUESTED', dataPost)
}

export default dataFetchPosts
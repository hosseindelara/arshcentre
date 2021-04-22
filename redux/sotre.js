import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from 'redux-saga';

import { reducers } from "./reducers";

import mySaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware()

// export const store = compose(
//     applyMiddleware(sagaMiddleware),
//     // window.devtoolsExtension && window.devtoolsExtension(),
// )(createStore)(reducers)

export const store = createStore(reducers,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(mySaga)
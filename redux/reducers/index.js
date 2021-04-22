import { combineReducers } from "redux";
import { itemnumber } from "./itemnumber";

import { PageNumber } from './PageNumber'

export const baceUrlreducer = (baseurl = 'http://tpi.uneed.ir:7100', action) => baseurl


export const reducers = combineReducers({

    baseUrl: baceUrlreducer,
    page: PageNumber,
    itemnumber


})
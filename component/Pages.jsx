import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import {prevPage,nextPage,number} from '../redux/actions/pages'
export default function Pages() {
    const state = useSelector(state => state.page)
    const dispatch = useDispatch()
const page=[1,2,3,4,5,6]

    return (

<Pagination>
<Pagination.Prev onClick={()=>dispatch(prevPage())} />
{
    page.map(item=>(
        item===state?
        <Pagination.Item active key={item} onClick={()=>dispatch(number(item))}>{item}</Pagination.Item>
        :<Pagination.Item key={item} onClick={()=>dispatch(number(item))}>{item}</Pagination.Item>
    ))
}
<Pagination.Next onClick={()=>dispatch(nextPage())} />
</Pagination>
    )
}

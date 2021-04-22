import { Form } from "react-bootstrap";

import { useSelector, useDispatch } from 'react-redux';

import { itemShow } from '../redux/actions/itemShow'

export default function Selector() {


    const state = useSelector(state => state.itemnumber)
    const dispatch = useDispatch()

    const option = [12, 24, 36]

    const handeloncheng = (e) => {
        console.log(e.target.value)
        dispatch(itemShow(e.target.value))
    }
    return (
        <Form.Group controlId="exampleForm.ControlSelectteset">
            <Form.Label> تعداد کالا</Form.Label>
            <Form.Control as="select" onChange={handeloncheng} >
                {
                    option.map(item => (
                        <option key={item.toString()} value={item} >{item}</option>
                    ))
                }

            </Form.Control>
        </Form.Group>


    )
}

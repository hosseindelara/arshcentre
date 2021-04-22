import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const MyCard=styled.div`
border: 2px solid palevioletred;
border-radius: 5px;

`
export default function Card({data}) {

console.log(data)

    return (
        <Col lg={3} md={3} sm={6} xs={12} >
            <MyCard>
<span>  {data.post.regionName}</span>
<div>
<img src={`http://tpi.uneed.ir:7100/m/${data.post.media[0].hash}`} alt={data.post.title} width='200px' height='200px    ' />

    <h3>{data.post.title}</h3>
    <p>{data.post.text}</p>
</div>
         
         <div>

         </div>
            </MyCard>
        </Col>
    )
}

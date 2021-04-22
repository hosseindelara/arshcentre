import { Col, Row } from "react-bootstrap";
import styled from "styled-components";


const MyCard = styled.div`

border-radius: 15px;
margin-top:30px;
padding:10px;
max-height:400px;
min-height: 400px;
box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
transition: all .5s;
`

const MyImge = styled.img`
width:100%;
height:200px;
border-radius: 15px;
`
const Sochal = styled.div`
display: flex;
justify-content: flex-start;
align-items: baseline;

`
const Contactus = styled.div`
display: flex;
margin-right: auto;
align-items: baseline;
`

const TitelBox = styled.h3`
font-size: 18px;
font-weight: bold;
`
const TextBox = styled.p`
font-size: 14px;
font-weight: normal;

`

export default function Card({ data }) {


    return (
        <Col lg={3} md={6} sm={6} xs={12} >
            <MyCard>
                <small> <i className="fa fa-map-marker" aria-hidden="true"></i> {data.post.regionName}</small>
                <div>
                    <MyImge src={`http://tpi.uneed.ir:7100/m/${data.post.media[0].hash}`} alt={data.post.title} width='200px' height='200px    ' />
                    <div className='d-flex mt-3 mb-2 mr-2' >
                        <Sochal>
                            <i className="fa fa-heart-o ml-1" aria-hidden="true"></i>
                            <i className="fa fa-bookmark-o ml-1" aria-hidden="true"></i>
                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                        </Sochal>
                        <Contactus>
                            <i class="fa fa-phone ml-1" aria-hidden="true"></i>
                            <i class="fa fa-commenting-o" aria-hidden="true"></i>
                        </Contactus>
                    </div>
                    <TitelBox>{data.post.title}</TitelBox>
                    <TextBox>{data.post.text.substring(0, 85)}</TextBox>
                </div>


            </MyCard>
        </Col>
    )
}


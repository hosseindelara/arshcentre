import Head from 'next/head'

import Card from '../component/Card'
import axios from 'axios'
import { store } from '../redux/sotre'
import Pages from '../component/Pages'
import Selector from '../component/selector'
import nookies from 'nookies'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FetchData } from '../redux/actions'

export default function Home({ dataFetch }) {

  const router = useRouter()

  useEffect(() => {

    if (dataFetch.data) {

    }
    else {
      router.push('/login')
    }
    return () => {

    }
  }, [])

  return (
    <div>
      <Row>

      </Row>
      <Col lg='3' md='4' sm='6' xs='12' >
        <Selector />
      </Col>
      <section>
        <Row>
          {dataFetch.data ? dataFetch.data.length > 0 ?
            dataFetch.data.map((item, index) => (<Card key={index} data={item} />))
            : 'هیچ کالای برانمایش نیست'
            : null
          }
        </Row>
      </section>
      <Row>
        <Col lg='12' className='mt-5' >
          <Pages />
        </Col>
      </Row>

    </div>

  )
}
export async function getServerSideProps(context) {

  const { baseUrl, page, itemnumber } = store.getState()

  const cookies = nookies.get(context)


  const dataFrom = {
    lm: itemnumber,
    pg: page,
    tp: 1
  }

  let dataFetch = {}
  if (cookies.token) {
    // store.dispatch(FetchData())
    // console.log(store.getState());

    try {
      const res = await axios.post(`${baseUrl}/post/search`, JSON.stringify(dataFrom), {
        headers: {
          "t": cookies.token,

          "content-type": "application/json; charset=utf-8 "
        }
      })

      dataFetch = res.data.result
    } catch (error) {
      dataFetch = {}
    }


  } else {
    dataFetch = {}
  }


  return {
    props: { dataFetch }, // will be passed to the page component as props
  }
}
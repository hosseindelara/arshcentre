import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../component/Card'
import axios from 'axios'
import { store } from '../redux/sotre'
import Pages from '../component/Pages'
import Selector from '../component/selector'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

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
      <Row>
        {dataFetch.data.length > 0 ?
          dataFetch.data.map((item, index) => (<Card key={index} data={item} />))
          : 'هیچ کالای برانمایش نیست'
        }
      </Row>

      <Row>
        <Col lg='12' className='mt-5' >
          <Pages />
        </Col>
      </Row>


    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
export async function getServerSideProps(context) {

  const { baseUrl, page, itemnumber } = store.getState()
  const dataFrom = {
    lm: itemnumber,
    pg: page,
    tp: 1
  }

  let dataFetch = {}

  try {
    const res = await axios.post(`${baseUrl}/post/search`, JSON.stringify(dataFrom), {
      headers: {
        "t": '9ZieBz+gYR93+UaEUOFkkhJ7KjISbz/6Tt9svuoYS5A=',

        "content-type": "application/json; charset=utf-8 "
      }
    })

    dataFetch = res.data.result
  } catch (error) {
    dataFetch = {}
  }

  return {
    props: { dataFetch }, // will be passed to the page component as props
  }
}
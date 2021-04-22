
import { Provider } from 'react-redux';
import { store } from '../redux/sotre'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'


import '../styles/globals.css'
import '../styles/font.css'


function MyApp({ Component, pageProps }) {
  return <Container> <Provider store={store} > <Component {...pageProps} /></Provider></Container>
}

export default MyApp

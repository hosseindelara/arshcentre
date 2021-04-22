import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux';
import {store} from '../redux/sotre'
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return<Container> <Provider store={store} > <Component {...pageProps} /></Provider></Container>
}

export default MyApp

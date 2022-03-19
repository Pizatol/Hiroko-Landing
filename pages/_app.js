import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ModalProvider } from '../context/ModalContext'

function MyApp({ Component, pageProps }) {
  return (

   <ModalProvider>
    <Navbar>
    <Component {...pageProps} />
   </Navbar>
   </ModalProvider>

    
   
    )
}

export default MyApp

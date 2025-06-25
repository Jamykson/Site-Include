import './App.css'

import TopBar from './components/TopBar'
import QuemSomos from  './components/QuemSomos'
import Servicos from './components/Servicos'
import ListMembros from './components/ListMembros'
import Diagnostico from  './components/Diagnostico'
import Footer from  './components/Footer'
import Home from  './components/Home'
import Portifolio from './components/Portifolio'

function App() {
  
  return (
    <div className='App'>
      <TopBar/>
      <Home/>
      <QuemSomos/>
      <Servicos/>
      <Diagnostico/>
      <Footer/>
    </div>
  )
}

export default App

import './App.css'

import TopBar from './components/TopBar'
import QuemSomos from  './components/QuemSomos'
import Servicos from './components/Servicos'
import ListMembros from './components/ListMembros'
import Dados from './components/Dados'
import Diagnostico from  './components/Diagnostico'
import Footer from  './components/Footer'
import Home from  './components/Home'
import Portifolio from './components/Portifolio'
import NossosValores from './components/NossosValores'
import QuemPodemosAjudar from './components/QuemPodemosAjudar'

function App() {
  
  return (
    <div className='App'>
      <TopBar/>
      <Home/>
      <QuemSomos/>
      <Dados />
      <QuemPodemosAjudar />
      <Servicos/>
      <NossosValores />
      <Diagnostico/>
      <Footer/>
    </div>

    
  )
}

export default App

import './App.css'
import { Header } from './components/Header/Header'
import { GridContent } from './components/GridContent/GridContent'
import { ToolBar } from './components/ToolBar/ToolBar'
import { Footer } from './components/Footer/Footer'
import { Modal } from './components/Modal/Modal'
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(true)
  return (
    <div className='container'>
      <Header></Header>
      <div className='mainContent'>
        <ToolBar setModalProp={setModal}></ToolBar>
        <GridContent></GridContent>
      </div>
      <Modal modalProp={modal} setModalProp={setModal}></Modal>
      <Footer></Footer>
    </div>
  )
}

export default App

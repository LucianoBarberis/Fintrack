import './App.css'
import { Header } from './components/Header/Header'
import { GridContent } from './components/GridContent/GridContent'
import { ToolBar } from './components/ToolBar/ToolBar'
import { Footer } from './components/Footer/Footer'
import { Modal } from './components/Modal/Modal'

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <div className='mainContent'>
        <ToolBar></ToolBar>
        <GridContent></GridContent>
      </div>
      <Modal></Modal>
      <Footer></Footer>
    </div>
  )
}

export default App

import './App.css'
import Card from './components/GridContent/Card/Card'
import { Header } from './components/Header/Header'
import { GridContent } from './components/GridContent/GridContent'
import { ToolBar } from './components/ToolBar/ToolBar'

function App() {

  return (
    <div className='container'>
      <Header></Header>
      <div className='mainContent'>
        <ToolBar></ToolBar>
        <GridContent></GridContent>
      </div>
    </div>
  )
}

export default App

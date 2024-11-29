import './App.css'
import Card from './components/GridContent/Card/Card'
import { Header } from './components/Header/Header'
import { GridContent } from './components/GridContent/GridContent'

function App() {

  return (
    <div className='container'>
      <Header></Header>
      <div className='mainContent'>
        <div></div>
        <GridContent></GridContent>
      </div>
    </div>
  )
}

export default App

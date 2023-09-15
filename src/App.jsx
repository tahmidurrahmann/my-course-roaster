import './App.css'
import Courses from './components/Header/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <header>
      <Header></Header>
    </header>
    <main className='mb-10'>
      <Courses></Courses>
    </main>
    </>
  )
}

export default App
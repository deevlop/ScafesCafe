import { useState } from 'react'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const [page, setPage] = useState('landing')
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (

    <>
      <Navbar setPage={setPage} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {
        page === 'landing' && (
          <Landing setPage={setPage} />
        ) 
      }

      {
        page === 'menu' && (
          <Menu />
        )
      }

      {
        page === 'about' && (
          <About />
        )
      }

      {
        page === 'contact' && (
          <Contact />
        )
      }
    </>

  )
}

export default App

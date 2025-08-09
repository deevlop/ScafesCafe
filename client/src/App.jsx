import { useState } from 'react'
import Landing from './pages/Landing'



function App() {
  const [page, setPage] = useState('landing')

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Landing setPage={setPage} />
    </div>
    
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Home from "./components/Home"; 

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPups() {
      try {
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        let data = await response.json()
        let translatedData = data.data.players 
        setPlayers(translatedData)

      } catch (error) {
        console.log(error)
      }
    }
    fetchPups()
  }, [])
  return (
    
    <div>
      <nav className='container-element'>
        <Link to='/'>HOME</Link>
        <Link to='/puppies'>All Puppies</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/puppies' element={<Listpuppy puppies= {puppies} />} />
      </Routes>
    </div>
  ) 
}

export default App
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [games, setGames] = useState()
  useEffect(() => {
    async function getGames() {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`);
      const jsonData = await response.json();
      setGames(jsonData);
    }
    getGames();
  }, []);
  return (
    <>
      Test
      <p>{JSON.stringify(games)}</p>
    </>
  )
}

export default App

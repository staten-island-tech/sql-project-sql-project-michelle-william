import supabase from './config/supabase'
import { useEffect, useState } from 'react'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [players, setPlayers] = useState(null)

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase.from('players').select()

      if (error) {
        setFetchError('Could not fetch the players')
        setPlayers(null)
        console.log(error)
      }
      if (data) {
        setPlayers(data)
        setFetchError(null)
      }
    }

    fetchPlayers()
  }, [])
  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div className="players">
          {players.map((player) => (
            <p>{player.LastName}</p>
          ))}
        </div>
      )}
    </div>
  )
}
export default Home

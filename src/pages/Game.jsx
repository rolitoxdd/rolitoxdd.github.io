import { useEffect, useState } from "react"

import backCard from '../img/back.jpg'
import newCard from '../utilities/newCard.js'
import './styles/Game.css'

const Game = ({match, history}) => {
  const GAME_ID = match.params.gameId
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({cards: [{image: backCard}]})
  const [animation, setAnimation] = useState('animate__wobble')


  useEffect(() => {
    const getDeckInfo = async () => {
      setLoading(true)
      const DECK_INFO_API = `https://deckofcardsapi.com/api/deck/${GAME_ID}`
      try {
        const res = await fetch(DECK_INFO_API);
        setLoading(false)
        const json_data = await res.json();
        setData(d => ({...d,...json_data}))
        if (json_data.success) {
          console.log(json_data);
        } else {
          history.push('/')
        }
      } catch (err) {
        setLoading(false)
        console.error(err);
      }
    };
    getDeckInfo()

  }, [match, history, GAME_ID])

  const handleClick = async () => {
    setAnimation('')
    const result = await newCard(GAME_ID)
    setData(result)
  }  
  return (
    <div>
      {
        loading ? 
        (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : 
        (
          <div className="info">
          <div onClick={handleClick} >
            <img 
              src={ data.cards[0].image } 
              alt="card" 
              onLoad={()=>setAnimation('animate__wobble')}
              className={`deck-card animate__animated ${animation}`}
              />
          </div>
          <div className="card">
          <div className="card-body"> 
          Cartas restantes: {data.remaining}
          </div>
          </div>
          </div>
        )

      } 
    </div>
  )
}

export default Game

import {useState} from 'react'

import "./styles/Index.css";

const Index = ({history}) => {

  const NEW_DECK_API =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1&jokers_enabled=true";

  const [loading, setLoading] = useState(false)

  const getNewDeck = async () => {
    setLoading(true)
    try {
      const res = await fetch(NEW_DECK_API);
      setLoading(false)
      const data = await res.json();
      history.push(`/game/${data.deck_id}`)
    } catch (err) {
      setLoading(false)
      console.error(err);
    }
  };

  return (
    <>
    {
      loading ? 
      (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : 
      (
        <button
          onClick={getNewDeck}
          className="btn btn-outline-dark"
        >
          Nuevo juego
        </button>
      )
    }
    </>
  );
};

export default Index;

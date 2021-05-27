const newCard = async (deckId) => {
  const API_URL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  const res = await fetch(API_URL)
  const data = await res.json()
  return data
}
export default newCard
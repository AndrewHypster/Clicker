import { useSelector } from "react-redux"

const SaveGame = () => {
  const state = useSelector(state => state)

  const save = () => {
    const userName = state.user.userName
    const coins = state.coin.coins
    const earn = state.earn.earn
    const shop = state.shop.shop
    const shopItems = shop.tovar.map(arr => arr.items)

    fetch(`http://localhost:1503/save-game/${userName}/${coins}/${earn}/${shopItems.join(',')}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
  }
  
  return <button onClick={save}>Зберегти гру</button>
}

export default SaveGame
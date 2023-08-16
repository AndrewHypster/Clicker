import App from '../App'
import '../sass/Clicker.sass'

const Clicker = props => {
  const {points, setPoints} = props.points
  const Click = () => setPoints(points+1)

  return (
    <div className="Clicker">
      <div className="content" onClick={Click}>
        <img src="./imgs/btc.png" alt="btc" />
        <h1>{points}</h1>
      </div>
    </div>
  )
}

export default Clicker
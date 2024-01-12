import './sass/clicker.sass'
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "./store/coinSlice";
import bigInt from 'big-integer';
import IntConvert from './components/intConvert';

function Clicker() {
  const dispatch = useDispatch()
  const [coins, setCoins] = [useSelector(state => state.coin.coins), earn => dispatch(addCoins(earn))]
  const earn = useSelector(state => state.earn.earn)
  
  return (
    <div className="Clicker" onClick={() => setCoins(1000)}>
      <span>
        <IntConvert int={bigInt(coins).value} />
        <p><IntConvert int={bigInt(earn).value} />/ceк</p>
      </span>
      <img src="./img/clicker/ghost.png" alt="привид"/>
    </div>
  );
}

export default Clicker;
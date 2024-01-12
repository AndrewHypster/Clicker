import './sass/shop.sass'
import shop from './shop.json'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "./store/coinSlice";
import { addEarn } from "./store/earnSlice";
import IntConvert from './components/intConvert';
import bigInt from 'big-integer';

function Shop() {
  const dispatch = useDispatch()
  const [coins, setCoins] = [useSelector(state => state.coin.coins), earn => dispatch(addCoins(earn))]
  const [earn, setEarn] = [useSelector(state => state.earn.earn), earn => dispatch(addEarn(earn))]

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(earn)
    }, 1000)

    return () => clearInterval(interval)
  }, [earn])

  const by = (tovar, id) => {
    console.log(tovar);
    if (coins >= tovar.cost) {
      setEarn(tovar.earn)
      setCoins(-tovar.cost)
      shop.tovar[id].items += 1
      shop.tovar[id].cost = Math.floor(shop.tovar[id].cost * shop.cost)
      shop.tovar[id].earn = Math.ceil(shop.tovar[id].earn * shop.earn)
    }
  }

  return (
    <div className="Shop">
      <h2>Shop</h2>
      <ul>
        {
          shop.tovar.map((tovar, id) =>
            <li onClick={() => by(tovar, id)} key={id}>
              <img src={`./img/shop/${id}.png`} alt={tovar.name} />
              <div className="info">
                <b>{tovar.name}</b>
                <div>
                  <p>Ціна: <IntConvert int={bigInt(tovar.cost).value} /></p>
                  <p>Душ: <IntConvert int={bigInt(tovar.earn).value} />/сек</p>
                  <p>Кількість: <IntConvert int={bigInt(tovar.items).value} /></p>
                </div>
              </div>
            </li>  
          )
        }
      </ul>
    </div>
  );
}

export default Shop;
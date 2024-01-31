import './sass/shop.sass'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoins } from "./store/coinSlice";
import { addEarn } from "./store/earnSlice";
import IntConvert from './components/intConvert';
import bigInt from 'big-integer';
import { addItem } from './store/shopSlice';

function Shop() {
  const dispatch = useDispatch()
  const [coins, setCoins] = [useSelector(state => state.coin.coins), earn => dispatch(addCoins(earn))]
  const [earn, setEarn] = [useSelector(state => state.earn.earn), earn => dispatch(addEarn(earn))]
  const [shop, setShop] = [useSelector(state => state.shop.shop), (id, items) => dispatch(addItem({id: id, items: items}))]

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
      setShop(id, 1)
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
                  <p>Штук: <IntConvert int={bigInt(tovar.items).value} /></p>
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
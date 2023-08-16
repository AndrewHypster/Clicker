import { useEffect, useState } from "react";
import Clicker from "./components/Clicker";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const [points, setPoints] = useState(localStorage.getItem('points') | 0)
  const [shop, setShop] = useState([])

  useEffect(() => {
    if (points%10 === 0)
      localStorage.setItem('points', points)
  })

  if (shop !== '') {
    setTimeout(() =>{
      console.log(shop);
      const earnItem = shop.map(product => product.earn * product.quantity)
      let earnAll = 0
      earnItem.forEach(earn => earnAll += earn)
      setPoints(points + earnAll)
  }, 1000)
  }

  return (
    <div className="App">
      <Header />
      <Clicker points={{points, setPoints}} />
      <SideBar points={{points, setPoints}} shop={{shop, setShop}} />
    </div>
  );
}

export default App;

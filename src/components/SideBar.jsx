import '../sass/SideBar.sass'
import Header from './SideBar/Header';
import Shop from './SideBar/Shop';
import Some from "./some";

const SideBar = props => {
  return (
    <div id="SideBar">
      <Header />
      {/* <Some points={{points: props.points.points, setPoints: props.points.setPoints}} /> */}
      <Shop shop={{shop: props.shop.shop, setShop: props.shop.setShop}} points={{points: props.points.points, setPoints: props.points.setPoints}} />
    </div>
  )
}

export default SideBar
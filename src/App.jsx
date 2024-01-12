import './sass/index.sass'
import './sass/app.sass'
import Clicker from "./Clicker";
import Shop from "./Shop.jsx";
import IntConvert from './components/intConvert'

function App() {
  return (
    <div className="App">
      <Clicker />
      <div className="center" style={{background: '#2f2929'}}></div>
      <Shop />
    </div>
  );
}

export default App;

import './sass/index.sass'
import './sass/app.sass'
import Clicker from "./Clicker";
import Shop from "./Shop.jsx";
import Header from './components/Header';
import SignUp from './components/sign_up_in/up';
import SignIn from './components/sign_up_in/in';
import SaveGame from './components/saveGame';

function App() {
  return (
    <>
      <Header />
      <SignUp />
      <SignIn />
      <div className="App">
        <Clicker />
        <Shop />
      </div>
      <SaveGame />
    </>
  );
}

export default App;

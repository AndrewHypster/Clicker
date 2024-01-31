// up - реєстрація
// in - вхід
import { useDispatch } from "react-redux";
import "../../sass/sign.sass";
import { setCoins } from "../../store/coinSlice";
import { setEarn } from "../../store/earnSlice";
import { setItems } from "../../store/shopSlice";
import { login } from "../../store/userSlice";

const Sign = ({ type }) => {
  const dispatch = useDispatch()
  
  const register = btn => { // Реєстрація
    const [userName, password, pass2] = btn.target.form
    if(password.value === pass2.value) {
      fetch(`http://localhost:1503/register/${userName.value}/${password.value}`)
    }
  }

  const enter = btn => { // Вхід
    const [userName, password] = btn.target.form

    fetch(`http://localhost:1503/enter/${userName.value}/${password.value}`)
      .then(resp => resp.json())
      .then(data => {
        if(data.message === 'true') {
          dispatch(login(data['user-info'].userName)) // змінює статус
          dispatch(setCoins(data['user-info'].coins)) // монетки
          dispatch(setEarn(data['user-info'].earn)) // заробіток
          data['user-info'].shop.forEach((item, id) => dispatch(setItems({id: id, items: item}))) // кількість кожного товару
        }
      })
  }

  return (
    <form id="Sign">
      <a href="#" className="exit">x</a>
      <h2>{type.toUpperCase()}</h2>

      <ul>
        <li>
          <input type="text" placeholder="Ім'я" name="username" />
        </li>
        <li>
          <input type="password" placeholder="Пароль" name="password" />
        </li>
        {
          type === 'sign up'? // Якщо реєстрація
            <li>
              <input type="password" placeholder="Пароль" name="password" />
            </li> : <></>
        }
        
      </ul>
      
      {
        type === 'sign up'? // Якщо реєстрація
          <a href="#"><button type="button" onClick={register}>Зареєструватись</button></a> :
          <a href="#"><button type="button" onClick={enter}>Увійти</button></a>
      }

      {
        type === 'sign up'? // Якщо реєстрація
          <a href="#SignIn">Увійти</a> :
          <a href="#SignUp">Зареєструватись</a>
      }
    </form>
  );
};

export default Sign
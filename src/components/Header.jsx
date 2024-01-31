import "../sass/header.sass";

const Header = () => {
  return (
    <header id="Header">
      <h1 className="logo">Clicker</h1>
      <a href="#SignUp">
        <button>Увійти</button>
      </a>
    </header>
  );
};

export default Header;

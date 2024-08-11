import "./Header.css";

const name = "CRYPTO";

const Header = () => {
  return (
    <header className="header">
      {/* {name} */}
      <div className="sign-wrap-1">
        <span className="sign_word">{name}</span>
      </div>
    </header>
  );
};

export default Header;

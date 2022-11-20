import Nav from "../Nav/Nav";
import Logo from "../logo/Logo";
import Login from "../Login/Login";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row d-flex align-items-baseline">
          <div className="col col-lg-1 me-5">
            <Logo />
          </div>
          <div className="col col-lg-4">
            <Nav />
          </div>
          <div className="col col-lg-6">
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

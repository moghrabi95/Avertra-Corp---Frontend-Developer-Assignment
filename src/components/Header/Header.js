import Nav from "../Nav/Nav";
import Logo from "../logo/Logo";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row d-flex align-items-baseline">
          <div className="col-1 col-lg-1 me-5">
            <Logo fill="#34313D" />
          </div>
          <div className="col-9 col-lg-10">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Login from "../Login/Login";
import "bootstrap";
const Nav = () => {
  const navLinks = ["Features", "Pricing", "Resources"];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a className="nav-link" aria-current="page" href="/">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          <Login />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

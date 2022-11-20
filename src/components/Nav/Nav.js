const Nav = () => {
  const navLinks = ["Features", "Pricing", "Resources"];
  return (
    <nav>
      <ul className="navlist nav">
        {navLinks.map((link, index) => {
          return (
            <li className="nav-item" key={index}>
              <a href="www.tt.com" className="nav-link">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

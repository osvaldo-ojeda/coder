const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Osvaldito
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Categoria1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Categoria3</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};
export default NavBar;

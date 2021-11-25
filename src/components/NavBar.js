function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="n">Logo</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="servicios.html">Servicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="agendar.html">Agendar Citas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="n">Administracion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

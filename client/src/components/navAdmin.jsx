import {BsFillPeopleFill} from "react-icons/bs"
import {MdProductionQuantityLimits, MdPowerSettingsNew }from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {TfiReload} from "react-icons/tfi"

export function NavAdmin({handleFilter}) {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <h2 className="navbar-brand" >
          Admin "nombre apellido"
        </h2>
        <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button onClick={() => handleFilter()} className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button onClick={() => handleFilter()} className="btn btn-outline-success" type="submit">
                <TfiReload />
              </button>
            </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Admin dashboard 
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <BsFillPeopleFill />  Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <MdProductionQuantityLimits  /> Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <AiFillSetting /> Settings 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                < MdPowerSettingsNew />  LogOut 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
}

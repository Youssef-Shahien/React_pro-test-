import React from "react";
import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <div>
      <nav className="navbar bg-secondary bg-opacity-10 ">
        <div className="container-fluid">
          <a href="/" className="navbar-brand fw-bold logo ps-3" >
            MediMatch
          </a>
          <Link to="/" className="btn button" type="submit">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HeaderLogin;

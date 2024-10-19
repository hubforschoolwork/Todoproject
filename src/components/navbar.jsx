import React from 'react';
import {Link} from 'react-router-dom';


const MyNavbar = () => {
  return (
  <div className="container-bar">
    <nav className="navbar navbar-expand-lg bg-info border-bottom border-body" data-bs-theme="primary%">

  <div className="container-fluid">
    <a className="navbar-brand" href="#">MY LIST</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">To Do List</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contacts">Contacts</Link>
      </li>

    </ul>

  </div>
  </div>
  </nav>

</div>


  );
};

export default MyNavbar;


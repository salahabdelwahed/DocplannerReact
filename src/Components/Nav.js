import React from "react";
import "../CSS/Nav.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Nav">
        <img
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt=""
          srcset=""
        />
        <div className="menu">
          <ul className="drop">
            <li>
              <a href="">
                {" "}
                <span>About us</span>{" "}
              </a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li className="list">
              <a href="">Departments</a>
              <ul className="drop-list">
                <li>
                  <a href="">Marketing & PR</a>
                </li>
                <li>
                  <a href="">Customer Success & Sales</a>{" "}
                </li>
                <li>
                  <a href="">IT,Product,Data</a>
                </li>
                <li>
                  <a href="">Finance & Administartion</a>
                </li>
                <li>
                  <a href="">HR & more</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

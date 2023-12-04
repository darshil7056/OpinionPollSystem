import React from 'react';
import "./AdminNavigation.css"
import { NavLink } from 'react-router-dom';
const AdminNavigation = () => {
  return (
    <>
      <svg style={{ display: 'none' }}>
        {/* Paste the SVG code here */}
      </svg>

      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <use xlinkHref="#home"></use>
            </svg>
            <NavLink to = "/admin/AddStudent" className="tabs">Add Students</NavLink><hr></hr>
            <NavLink to = "/admin/AddProfessor" className="tabs">Add Professor</NavLink><hr></hr>
            <NavLink to = "/admin/ViewProfessor" className="tabs">View Professor</NavLink><hr></hr>
            <NavLink to = "/" className="tabs">Home</NavLink>
  

          </li>

          {/* Add the other navigation items here */}
        </ul>
      </nav>

      {/* <div className="wrapper">
        <main>
          <h1>Fixed Side Drawer Hover Navigation </h1>
        </main>
      </div> */}
    </>
  );
};

export default AdminNavigation;

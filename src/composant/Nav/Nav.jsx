import React from 'react';
import './styleMenu.css';
import { Link } from 'react-router-dom';


const Nav = ({ first = "All", second = "Random Suggestion" }) => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{first}</Link>
          </li>
          <li>
            <Link to="/suggestion">{second}</Link>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default Nav;
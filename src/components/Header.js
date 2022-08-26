import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { handleCategoryChange } from "./Home";
function Header({ handleCategoryChange }) {
  return (
    <div className="header">
      <div className="header__logo__container"></div>
      <div className="menu">
        <ul className="dropMenu">
          <li className="home">
            <Link to="/" className="nav-link">
              <p>Home</p>
            </Link>
          </li>
          <li className="Recomadation">
            <p>Recommended</p>
          </li>
          <li className="genres"></li>
          <div className="btn-group">
            <li
              type="button"
              className="Genres"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Order-By
            </li>
            <ul className="dropdown-menu">
              {/* {allGenres.map((item) => {
                return (
                  <li>
                    <a
                      className="dropdown-item"
                      key={item.mal_id}
                      onClick={(e) => navigate(`/genres/${item.name}/${item.mal_id}`)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })} */}
            </ul>
          </div>
          <li className="Forum">
            <Link to="/1" className="nav-link">
              <p>All Anime</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__button__container">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search by name..."
            // value={result}
            // onChange={onChange}
          />
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="TV">Tv</option>
            <option value="Movie">Movie</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;

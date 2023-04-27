import React from "react";

export default function Searchbar() {
  return (
    <form className="search-form">
      <div className="container">
        <div className="row">
          <input
            type="search"
            className="searchbar col"
            id="form1"
            placeholder="Search city or zipcode"
          />
          <input
            type="submit"
            className="searchbutton .btn-outline-secondary col-2"
            id="searchButton"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}

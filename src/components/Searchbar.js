import React from "react";

const Searchbar = () => {
  //event handler handling click.
  return (
    <div className="bg-clr d-flex flex-column p-4">
      <input type="text" name="searchBar" className="wd300 m-auto mb-3"></input>
      <button className="btn-p btn-1 btn-clr btn-clr:hover m-auto mb-3">Search</button>
    </div>
  );
};

export default Searchbar;

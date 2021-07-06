import React, { useContext } from "react";
import "./Header.css";
import DeliveryTruckIcon from "../common/svg/delivery-truck-icon/delivery-truck-icon";
import PersonIcon from "../common/svg/person-icon/person-icon";
import BasketIcon from "../common/svg/basket/basket";
import { GET_COLLECTIONS } from "../../queries/queries";
import { useQuery } from "@apollo/client";
import { MyContext } from "../../context";

function Header() {
  const { searchState, setSearchState } = useContext(MyContext);

  const updateFilters = (e) => {
    setSearchState({
      ...searchState,
      facetValueIds: [],
      collectionId: e.target.value !== "Categories" ? e.target.value : null,
			facetFaluesPerCollectionInit: true,
    });
  };

  const onSearchBox = (e) => {
    setSearchState({
      isInit: true,
      facetFaluesPerCollectionInit: true,
      facetValuesDefaultFilters: [],
      facetFaluesDefaultPerCollection: [],
      facetValueIdsPerCollection: [],
      facetValueIds: [],
      collectionId: null,
      term: e.target.value,
    });
  };
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <header className="header">
      <span className="header__logo">Grasslands</span>
      <input className="header__search" onChange={onSearchBox}></input>
      <select className="header__categories-dropdown" onChange={updateFilters}>
        <option>Categories</option>
        {data.collections.items.map((col) => (
          <option value={col.id} key={col.id}>
            {col.name}
          </option>
        ))}
      </select>
      <div className="header__management">
        <span className="header__language">עברית</span>
        <div className="header__delivery-address">
          <i className="header__truck-icon">
            <DeliveryTruckIcon />
          </i>
          <span className="h6-regular">Delivery Address</span>
          <i className="header__person-icon">
            <PersonIcon />
          </i>
          <i className="header__basket-icon">
            <BasketIcon />
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;

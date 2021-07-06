import React, { useContext, useEffect } from "react";
import CatalogItemsContainer from "../catalog-items-container/catalog-items-container";
import CatalogFilters from "../catalog-filters/catalog-filters";
import "./catalog-main.css";
import { MyContext } from "../../../context";

function CatalogMain({ filters, items }) {
  const { searchState, setSearchState } = useContext(MyContext);

  const { collectionId, facetValueIds, isInit, facetFaluesPerCollectionInit } =
    searchState;

  useEffect(() => {
    if (isInit) {
      setSearchState({
        ...searchState,
        facetValuesDefaultFilters: filters,
        isInit: false,
      });
    }
  });

  if (collectionId && facetFaluesPerCollectionInit) {
    setSearchState({
      ...searchState,
      facetFaluesDefaultPerCollection: filters,
      facetFaluesPerCollectionInit: false,
    });
  }

  // const facets = Object.keys(filters);
  return (
    <div className="catalog-main__container">
      <div className="catalog-main__filters">
        <CatalogFilters filters={filters} />
      </div>
      <div className="catalog-main__items">
        <CatalogItemsContainer
          collectionId={collectionId}
          facetValueIds={facetValueIds}
          items={items}
        />
      </div>
    </div>
  );
}

export default CatalogMain;

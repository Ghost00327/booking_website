import React, { useContext } from "react";

import "./catalog-filters.css";

// import Checkbox from "../../common/checkbox/checkbox";
import { MyContext } from "../../../context";
import CatalogCollectionsFilters from "../catalog-collections-filters/catalog-collections-filters";
import CatalogSubFilters from "../catalog-sub-filters/catalog-sub-filters.component";
// const _ = require("lodash");

function CatalogFilters({ filters }) {
  const { searchState, setSearchState } = useContext(MyContext);

  const { facetValueIds, collectionId } = searchState;

  const addFacetValueId = (fv) => {
    const facetValueId = fv.id;
    setSearchState({
      ...searchState,
      facetValueIds: [...facetValueIds, facetValueId],
    });
  };

  const removeFacetValueId = (fv) => {
    const facetValueId = fv.id;
    setSearchState({
      ...searchState,
      facetValueIds: facetValueIds.filter((fv) => fv !== facetValueId),
    });
  };

  const addCollectionId = ({ id }) => {
    setSearchState({
      ...searchState,
      facetValueIds: [],
      collectionId: id,
      facetFaluesPerCollectionInit: true,
    });
  };

  const removeCollectionId = (col) => {
    setSearchState({
      ...searchState,
      facetValueIds: [],
      collectionId: null,
    });
  };

  return (
    <div className="catalog-filters">
      <div className="h4-medium catalog-filters__title">Filters</div>
      <CatalogCollectionsFilters
        addCollectionId={addCollectionId}
        removeCollectionId={removeCollectionId}
        collectionId={collectionId}
      />

      <CatalogSubFilters
        addFacetValueId={addFacetValueId}
        removeFacetValueId={removeFacetValueId}
        filters={filters}
      />
    </div>
  );
}

export default CatalogFilters;

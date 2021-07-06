import React, { useContext } from "react";
import { MyContext } from "../../../context";
import Checkbox from "../../common/checkbox/checkbox";

const CatalogSubFilters = ({
  filters,
  addFacetValueId,
  removeFacetValueId,
}) => {
  const { searchState } = useContext(MyContext);

  const {
    collectionId,
    facetValueIds,
    facetValuesDefaultFilters,
    facetFaluesDefaultPerCollection,
  } = searchState;

  const collectionFacets = Object.keys(facetFaluesDefaultPerCollection);
  const defaultFacets = Object.keys(facetValuesDefaultFilters);
  const isCategorySelected = false;
  const isSubFilterSelected = true;

  return (
    <div>
      {
        collectionId
          ? collectionFacets.map((facet, i) => (
              <div className="catalog-filters__spotlight" key={i}>
                <div className="h6-medium">{facet}</div>
                <div className="catalog-filters__spotlight__checkboxes">
                  {facetFaluesDefaultPerCollection[facet].map((fv) => {
                    let isChecked = false;
                    if (
                      collectionId &&
                      facetValueIds.some((x) => x === fv.facetValue.id)
                    ) {
                      isChecked = true;
                    }
                    const { name, id } = fv.facetValue;
                    return (
                      <Checkbox
                        addFacetValueId={addFacetValueId}
                        removeFacetValueId={removeFacetValueId}
                        value={name}
                        facetValue={fv.facetValue}
                        isChecked={isChecked}
                        isCategorySelected={isCategorySelected}
                        isSubFilterSelected={isSubFilterSelected}
                        key={id}
                      />
                    );
                  })}
                </div>
              </div>
            ))
          : defaultFacets.map((facet, i) => (
              <div className="catalog-filters__spotlight" key={i}>
                <div className="h6-medium">{facet}</div>
                <div className="catalog-filters__spotlight__checkboxes">
                  {facetValuesDefaultFilters[facet].map((fv) => {
                    let isChecked = false;
                    if (
                      !collectionId &&
                      facetValueIds.some((x) => x === fv.facetValue.id)
                    ) {
                      isChecked = true;
                    }
                    const { name, id } = fv.facetValue;
                    return (
                      <Checkbox
                        addFacetValueId={addFacetValueId}
                        removeFacetValueId={removeFacetValueId}
                        value={name}
                        facetValue={fv.facetValue}
                        isChecked={isChecked}
                        isCategorySelected={isCategorySelected}
                        isSubFilterSelected={isSubFilterSelected}
                        key={id}
                      />
                    );
                  })}
                </div>
              </div>
            ))
        // facetValuesDefaultFilters.map()
      }
    </div>
  );
};

export default CatalogSubFilters;

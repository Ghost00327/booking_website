import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COLLECTIONS } from "../../../queries/queries";
import Checkbox from "../../common/checkbox/checkbox";

const CatalogCollectionsFilters = ({
  collectionId,
  addCollectionId,
  removeCollectionId,
}) => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="catalog-filters__spotlight">
      <div className="h6-medium">Category</div>
      <div className="catalog-filters__spotlight__checkboxes">
        {data.collections.items.map((col) => {
          const { name, id } = col;
          let isChecked = false;
          if (collectionId && id === collectionId) {
            isChecked = true;
          }
          const isCategorySelected = true;
          const isSubFilterSelected = false;

          return (
            <Checkbox
              addFacetValueId={addCollectionId}
              removeFacetValueId={removeCollectionId}
              value={name}
              isChecked={isChecked}
              facetValue={col}
              isCategorySelected={isCategorySelected}
              isSubFilterSelected={isSubFilterSelected}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatalogCollectionsFilters;

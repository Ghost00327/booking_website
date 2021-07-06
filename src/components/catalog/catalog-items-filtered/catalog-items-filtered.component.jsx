import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router";
import { GET_COLLECTIONS } from "../../../queries/queries";
import ItemCard from "../../common/item-card/item-card";

const CatalogItemsFiltered = ({ collectionId, facetValueIds, items }) => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;


  const showItem = (x) => {
    history.push("/item", { item: x });
  };

  let collectionName = "";

  if (collectionId) {
    collectionName = data.collections.items.find(
      (col) => col.id === collectionId
    ).name;
  }
  return (
    <div>
      {collectionId ? (
        <div>
          <h3 className="ml-24 h3">{collectionName}</h3>
        </div>
      ) : (
        ""
      )}
      <div className="catalog-items__container">
        {items.map((item, i) => {
          const price =
            item.priceWithTax.min || (item.priceWithTax.value / 100).toFixed(2);
          return (
            <ItemCard
              key={i}
              title={item.productName}
              img={item.productAsset.preview}
              description={item.productName}
              weight={item.productVariantPriceMeasurement}
              price={price}
              currencyCode={item.currencyCode}
              showItem={() => {
                showItem(item.productId);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatalogItemsFiltered;

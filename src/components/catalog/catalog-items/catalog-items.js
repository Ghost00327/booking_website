import React from "react";
import ItemCard from "../../common/item-card/item-card";
import "./catalog-items.css";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../../../queries/queries";

// const produceData = [
//   {
//     title: "Kim & Jake’s Fruits",
//     img: "/images/Pomegranate.png",
//     description: "Pomegranate",
//     weight: "per 1 lb",
//     price: "$2.99",
//   },
//   {
//     title: "Kim & Jake’s Fruits",
//     img: "/images/mixed_berries.png",
//     description: "Mixed Berries",
//     weight: "per 1 lb",
//     price: "$8.99",
//   },
//   {
//     title: "Richfield Farm",
//     img: "/images/Red_Pepper.png",
//     description: "Organic Red Bell Pepper",
//     weight: "per 1 lb",
//     price: "$3.99",
//   },
//   {
//     title: "Richfield Farm",
//     img: "/images/potato.png",
//     description: "Washed Cornish Potatoes",
//     weight: "2.2 lb",
//     price: "$1.60",
//   },
// ];

// const dairyAndEggsData = [
//   {
//     title: "Miyoko’s Cramery",
//     img: "/images/butter.png",
//     description: "Organic European Cultured Vegan Butter",
//     weight: "8 oz",
//     price: "$6.99",
//   },
//   {
//     title: "Clover Sonoma",
//     img: "/images/milk.png",
//     description: "Grade A Organic Vitamin D Milk",
//     weight: "1 gal",
//     price: "$7.99",
//   },
//   {
//     title: "Kite Hill",
//     img: "/images/creamChease.png",
//     description: "Cream Cheese Style Spread",
//     weight: "8 oz",
//     price: "$6.99",
//   },
//   {
//     title: "ForaGer Project",
//     img: "/images/chaseMlik.png",
//     description: "Organic Dairy-free Plain Cashewmilk Yogurt",
//     weight: "24 oz",
//     price: "$5.69",
//   },
// ];

// const wineData = [
//   {
//     title: "Decoy Wines",
//     img: "/images/white _wine.png",
//     description: "Sonoma County Sauvignon Blanc",
//     weight: "750 ml",
//     price: "$14.99",
//   },
//   {
//     title: "Decoy Wines",
//     img: "/images/red_wine.png",
//     description: "Sonoma County Cabernet Sauvignon",
//     weight: "750 ml",
//     price: "$19.99",
//   },
//   {
//     title: "Kite Hill",
//     img: "/images/Chardonnay_Carneros.png",
//     description: "Chardonnay Carneros",
//     weight: "750 ml",
//     price: "$36.99",
//   },
//   {
//     title: "Jam Cellars",
//     img: "/images/Chardonnay_Butter.png",
//     description: "Chardonnay Butter",
//     weight: "750 ml",
//     price: "$36.99.69",
//   },
// ];

function CatalogItems(props) {
  const { collectionId, take, skip, showItem } = props;
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      collectionId: collectionId,
      take: take,
      skip: skip,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
      <div className="catalog-items__container">
        {data.search.items.map((item, i) => {
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
              showItem = {() => {showItem(item.productId)}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CatalogItems;

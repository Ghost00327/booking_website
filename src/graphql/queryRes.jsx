export const res = {
  data: {
    search: {
      facetValues: [
        {
          count: 1,
          facetValue: {
            id: "58",
            name: "Beef",
            facet: {
              id: "19",
              name: "Meat",
              __typename: "Facet",
            },
            __typename: "FacetValue",
          },
          __typename: "FacetValueResult",
        },
      ],
      items: [
        {
          sku: "100",
          productName: "Filet Mignon",
          productId: "3",
          slug: "filet-mignon",
          currencyCode: "USD",
          price: {
            __typename: "SinglePrice",
          },
          productVariantId: "3",
          productVariantName: "Filet Mignon",
          productVariantAsset: null,
          facetIds: ["19"],
          merchant: {
            name: "Sam's Steaks",
          },
          priceWithTax: {},
          productVariantPriceMeasurement: "each",
          description:
            "<p>Filet mignon is a steak cut of beef taken from the smaller end of the tenderloin, or psoas major of the cow carcass, usually a steer or heifer. In French, this cut is always called filet de bœuf, as filet mignon refers to pork tenderloin.</p>",
          productAsset: {
            id: "5",
            preview:
              "http://api.grasslandsmarkets.com/assets/gm__what-is-filet-mignon-1080x675__preview.jpg",
            focalPoint: null,
          },
        },
      ],
    },
  },
};

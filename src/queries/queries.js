import { gql } from "@apollo/client";

const GET_ITEMS = gql`
  query ($collectionId: ID!, $take: Int!, $skip: Int!) {
    search(input: { collectionId: $collectionId, take: $take, skip: $skip }) {
      items {
        productName
        productId
        slug
        currencyCode
        priceWithTax {
          ... on PriceRange {
            min
            max
          }

          ... on SinglePrice {
            value
          }
        }
        productVariantPriceMeasurement
        description
        productAsset {
          preview
        }
      }
    }
  }
`;

const GET_COLLECTIONS = gql`
  query Getcollections {
    collections {
      items {
        id
        name
      }
    }
  }
`;

const GET_PRODUCT = gql`
  query prduct($productId: ID!) {
    product(id: $productId) {
      slug
      id
      merchant {
        name
      }
      featuredAsset {
        type
        preview
        source
        mimeType
        fileSize
        width
      }
    }
  }
`;

const GET_FILTERS_PARAMS = gql`
  query {
    search(input: { take: 1000, skip: 0 }) {
      totalItems

      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
    }
  }
`;

const GET_ITEMS_WITH_FILTERS = gql`
  query (
    $term: String
    $facetValueIds: [ID!]
    $collectionId: ID
    $take: Int
    $skip: Int
    $sort: SearchResultSortParameter
  ) {
    search(
      input: {
        term: $term
        facetValueIds: $facetValueIds
        collectionId: $collectionId
        take: $take
        skip: $skip
        sort: $sort
      }
    ) {
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
            __typename
          }
          __typename
        }
        __typename
      }
      items {
        sku
        productName
        productId
        slug
        currencyCode
        price {
          __typename
        }
        productVariantId
        productVariantName
        productVariantAsset {
          id
          preview
          focalPoint {
            x
            y
          }
        }
        currencyCode
        facetIds
        merchant {
          name
        }
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
        }
        productVariantPriceMeasurement
        description
        productAsset {
          id
          preview
          focalPoint {
            x
            y
          }
        }
      }
    }
  }
`;

export {
  GET_ITEMS,
  GET_COLLECTIONS,
  GET_PRODUCT,
  GET_FILTERS_PARAMS,
  GET_ITEMS_WITH_FILTERS,
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://licensee-1.api.grasslandsmarkets.com/shop-api",
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query {
//         search(
//           input: {
//             collectionId: "2"
//             facetValueIds: []
//             groupByProduct: true
//             skip: 0
//             take: 24
//             term: ""
//           }
//         ) {
//           items {
//             productName
//             productAsset {
//               preview
//             }
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

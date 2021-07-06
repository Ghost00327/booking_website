import React, { useState } from "react";
// useReducer//
const initialState = {
  isInit: true,
  facetFaluesPerCollectionInit: true,
  term: "",
  facetValuesDefaultFilters: [],
  facetFaluesDefaultPerCollection: [],
  facetValueIdsPerCollection: [],
  facetValueIds: [],
  collectionId: null,
};

const MyContext = React.createContext(initialState);

const MyContextProvider = ({ children }) => {
  const [searchState, setSearchState] = useState(initialState);

  // useEffect(() => {
  //   const res = fetch();
  //   setSearchState({
  //     ...initialState,
  //     res,
  //   });
  // }, []);
  return (
    <MyContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

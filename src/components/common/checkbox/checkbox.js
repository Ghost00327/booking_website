import React from "react";
// import { MyContext } from "../../../context";
import "./checkbox.css";

function Checkbox({
  addFacetValueId,
  removeFacetValueId,
  value,
  facetValue,
  isChecked,
  // isCategorySelected,
  // isSubFilterSelected,
}) {
  // const { searchState, setSearchState } = useContext(MyContext);
  // const { collectionId, facetValueIds } = searchState;

  const handleChange = (e) => {
    e.target.checked
      ? addFacetValueId(facetValue)
      : removeFacetValueId(facetValue);
  };

	// let isCheckedd = false;

  // isCheckedd = isCategorySelected
  //   ? collectionId === facetValue.id
  //   : facetValueIds.some((x) => x === facetValue.id);

  let checkbox = <input type="checkbox" checked={isChecked} onChange={handleChange} />;
  // if (isCheckedd) {
  //   checkbox = <input type="checkbox" checked onChange={handleChange} />;
  // }

  return (
    <label className="container h6-regular">
      {checkbox}
      <span className="checkmark"></span>
      {value}
    </label>
  );
}

export default Checkbox;

import React from "react";
import { size } from "lodash";
import CustomSpinner from "./customSpinner";
import classes from "./search-suggesion.module.css";

const SearchSuggestions = ({
  suggestions,
  showSuggestions,
  closeSuggestionBox,
}) => {
  const listRenderer = suggestions.map((suggestion, index) => (
    <a
      // href={`/${suggestion.slug.en}/p/${suggestion.sku}`}
      key={index}
      href="/"
      onClick={closeSuggestionBox}
      className="mb-2 flex cursor-pointer items-center border p-2 text-xs hover:bg-gray-100"
    >
      <li tabIndex={1} className={classes.list}>
        <div>
          <img src={suggestion?.image} alt={suggestion.name} width={70} />
        </div>
        <div className={classes.listBody}>
          <div className="">{suggestion.name}</div>
          <div>
            <span className="">Price :</span> {suggestion.price}
          </div>
        </div>
      </li>
    </a>
  ));
  if (showSuggestions.loading) {
    return (
      <div className="absolute top-14 z-50 flex w-full justify-center border-2 border-gray-300 bg-white p-7">
        <CustomSpinner color="black" />
      </div>
    );
  }

  if (size(suggestions) === 0) {
    return (
      <div className="absolute top-14 z-50 flex w-full justify-center border-2 border-gray-300 bg-white p-7">
        <h3 className="text-center">No Products Found !!</h3>
      </div>
    );
  }

  return <ul className={classes.listContent}>{listRenderer}</ul>;
};

export default SearchSuggestions;

import React from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";
import { algoliaClient, algoliaIndex } from "../search/algoliaConfig";
function Hit({ hit }) {
  console.log(hit);
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p>
      <h1>{hit.name}</h1>
      <p>${hit.price}</p>
    </article>
  );
}
export default function Student() {
  return (
    <div>
      students data page
      <InstantSearch
        searchClient={algoliaClient}
        indexName={algoliaIndex.indexName}
      >
        <SearchBox className="" />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}

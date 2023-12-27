// algoliaConfig.js
const algoliasearch = require("algoliasearch/lite");

const algoliaClient = algoliasearch(
  "UNAI0QCCXR",
  "817a6524d5f52954595d69a4e6a58db8"
);
const algoliaIndex = algoliaClient.initIndex("algolia-search");

export { algoliaClient, algoliaIndex };

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import React Router's useNavigate
import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import debounce from "lodash/debounce";
import { useForm } from "react-hook-form";
import SearchSuggestions from "./search-suggesions";

const indexName = process.env.REACT_APP_PUBLIC_INDEX_NAME;
const algoliaSearchUrl = process.env.REACT_APP_PUBLIC_ALGOLIA_URL;
const applicationId = process.env.REACT_APP_PUBLIC_APPLICATION_ID;
const apiKey = process.env.REACT_APP_PUBLIC_API_KEY;

const SearchBar = ({ searchBarLabel }) => {
  const history = useNavigate(); // Use React Router's useNavigate hook
  const [searchSuggestions, setsearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState({
    loading: false,
    show: false,
  });
  const { register, handleSubmit, reset } = useForm();
  const suggestRef = useRef(null);

  const closeSuggestionBox = () => {
    reset();
    setShowSuggestions({ loading: false, show: false });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestRef?.current && !suggestRef.current.contains(event.target)) {
        closeSuggestionBox();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [suggestRef]);

  const onSearch = ({ searchTerm }) => {
    if (searchTerm.length > 0) {
      history.push(`/search?query=${searchTerm}`); // Use history.push for navigation
      reset();
    }
  };

  const getSuggestions = async (searchQuery) => {
    if (searchQuery.length === 0) {
      setShowSuggestions({ loading: false, show: false });
    }

    if (searchQuery.length > 2) {
      setShowSuggestions({ loading: true, show: true });
      try {
        const res = await axios.post(
          `${algoliaSearchUrl}x-algolia-application-id=${applicationId}&x-algolia-api-key=${apiKey}`,
          {
            requests: [
              {
                indexName: "algolia-search",
                query: searchQuery,
              },
            ],
          }
        );
        setsearchSuggestions(res?.data?.results[0]?.hits || []);
      } catch (err) {
        console.error(err);
      } finally {
        setShowSuggestions({ loading: false, show: true });
      }
    }
  };

  const handleChange = debounce((e) => {
    getSuggestions(e.target.value);
  }, 600);

  return (
    <div
      ref={suggestRef}
      className="relative w-full max-w-lg transition-all duration-200 md:flex-1"
      tabIndex={0}
    >
      <form
        onSubmit={handleSubmit(onSearch)}
        className=" flex w-full max-w-lg items-center justify-between border-2 border-gray-300 pl-3 transition-all duration-200 hover:border-2 hover:border-gray-600 focus:border-gray-600 focus:ring-0 md:flex-1"
      >
        <div className="relative">
          <input
            type="text"
            placeholder={searchBarLabel}
            {...register("searchTerm")}
            className="my-1 w-full border-transparent focus:border-transparent focus:ring-0"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="py-3 pl-3 transition-all duration-150 hover:bg-gray-200"
            type="submit"
          >
            <SearchIcon className="top mr-4 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </form>
      {showSuggestions.show && (
        <SearchSuggestions
          closeSuggestionBox={closeSuggestionBox}
          suggestions={searchSuggestions}
          showSuggestions={showSuggestions}
        />
      )}
    </div>
  );
};

export default SearchBar;

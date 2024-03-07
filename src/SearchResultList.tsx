
import "./searchResultList.css"
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ programs }) => {
  return (
    <div className="results-list">
      {programs.map((program, id) => {
        return <SearchResult name={program.name} key={id} image={program.programimage}/>;
      })}
    </div>
  );
};
import "./searchResult.css"

export const SearchResult = ({ name, image }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => console.log(`You selected ${name}!`)}
    >
        <img src={image} className="search-image"></img>
      {name}
    </div>
  );
};
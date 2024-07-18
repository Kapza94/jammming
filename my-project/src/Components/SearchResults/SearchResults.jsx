/* eslint-disable react/prop-types */
// interface ISearchResultsProps {
//   results: [];
// }
// IN TS Lenas advice for naming can come in handy with IComponentNameProps

// pass (props) => props.results.name
// pass {results} from props => results.name
import Track from "../Track/Track";

const SearchResults = ({ results, handleSelectedTracks }) => {
  // console.log(props);
  return (
    <div className="w-1/2 ">
      <h2 className="text-white text-3xl">Results</h2>

      {results.map((result, i) => (
        <div key={i} className="border-b-[1px]  flex justify-between">
          <Track result={result} />
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                handleSelectedTracks(result);
              }}
              className="text-gray-400 text-m font-extrabold pl-3 pr-3 "
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

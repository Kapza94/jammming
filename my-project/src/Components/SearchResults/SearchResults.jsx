/* eslint-disable react/prop-types */
// interface ISearchResultsProps {
//   results: [];
// }
// IN TS Lenas advice for naming can come in handy with IComponentNameProps

// const props = {
//   results: {
//     name: '1'
//   }
// }
// pass (props) => props.results.name 
// pass {results} from props => results.name

const SearchResults = ({ results }) => {
  // console.log(props);
  return (
    <div className="w-1/2 p-3">
      <h2 className="text-white ">Results</h2>

      {results.map((result, i) => (
        <div key={i}>{result.name}</div>
      ))}
    </div>
  );
};

export default SearchResults;

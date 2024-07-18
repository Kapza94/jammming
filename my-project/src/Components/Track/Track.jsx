/* eslint-disable react/prop-types */
//create a single track. With artist- album- song name. that will return into the tracklist once its created.
// import { songs } from "../TrackList/TrackList";

const Track = ({ result }) => {
  return (
    <div className="border-b-[1px] border-white flex justify-between">
      <div>
        <h4 className="text-white text-lg  mt-2">{result.name}</h4>
        <div className="flex">
          <p className="text-gray-400 text-s">{result.artist}</p>
          <p className="text-gray-400 text-s pl-3 pr-3"> | </p>
          <p className="text-gray-400 text-s mb-2">{result.album}</p>
        </div>
      </div>
    </div>
  );
};

export default Track;

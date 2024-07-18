// import Track from "../Track/Track";

import Track from "../Track/Track";

/* eslint-disable react/prop-types */
const Tracklist = ({ selectedTracks, handleSelectedTracksRemoval }) => {
  return (
    <div>
      <button className="text-white text-1xl  flex items-center">Save to Spotify</button>

      {selectedTracks.map((result, i) => (
        <div key={i} className="border-b-[1px] border-white flex justify-between">
          <Track result={result} />
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                handleSelectedTracksRemoval(result);
              }}
              className="text-gray-400 text-m font-extrabold pl-3 pr-3 "
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracklist;

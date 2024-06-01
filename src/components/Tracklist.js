import React from "react";

const Tracklist = () => {
  const tracks = [
    {
      id: 1,
      name: "ankaran",
      artist: "Hiljson Mandela feat Biba",
      album: "single",
    },
    {
      id: 2,
      name: "Surbee",
      artist: "Hiljson Mandela",
      album: "Mandela Effect",
    },
    {
      id: 3,
      name: "Slim Shady",
      artist: "Eminem",
      album: "Slim Shady LP",
    },
  ];
  return (
    <div className="bg-clr">
      <h3 className="fs-2">Results</h3>
      <ul className=" h-1000">
        {tracks.map((track) => (
          <li className="p-3" key={track.id}>
            {track.name}, {track.artist}, {track.album}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracklist;

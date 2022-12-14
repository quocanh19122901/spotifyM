import React from "react";
import { songs } from "../Context";
import { useContext } from "react";
import { useState } from "react";
export default function () {
  const { dataSongs, handleSetSong } = useContext(songs);
  const [ idSong, setIdSong ] = useState(0);
  const handleSong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className=" table-auto w-full">
        <tr className="text-white font-bold sticky top-0 w-full bg-slate-700">
          <th className="w-[10%]">#</th>
          <th>Title</th>
          <th className="w-[10%]">Author</th>
          <th className="w-[10%]">
            <i className="fa fa-download"></i>
          </th>
        </tr>
        <tbody>
          {dataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:cursor-pointer ${
                idSong === song.id && 'bg-slate-600 text-teal-600'
              }`}
              onClick={() => handleSong(song.id)}
            >
              <td className="w-[10%] text-center">{index + 1}</td>
              <td className=" text-center">{song.name}</td>
              <td className="w-[10%] text-center">{song.author}</td>
              <td className="w-[10%] text-center">
                <a href={song.url} className="fa fa-download"></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

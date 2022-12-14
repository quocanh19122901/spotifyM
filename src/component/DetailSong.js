import React from "react";
import { songs } from "../Context";
import { useContext } from "react";

export default function () {
  const {Song} = useContext(songs)

  return (
    <div className="col-span-1">
      <div className="p-6">
        <div className="font-bold text-blue-300">Now playing...</div>
        <div className="">{Song.name}</div>
        <div className="py-6">
          <img
            className=""
            src={Song.links.images[0].url}
          ></img>
        </div>
        <div className="flex justify-evenly">
            <div>
                <img  className="rounded-full h-12" src={Song.links.images[1].url}></img>
            </div>
            <div className="text-center leading-[48px]">
                {Song.author}
            </div>
        </div>
      </div>
    </div>
  );
}

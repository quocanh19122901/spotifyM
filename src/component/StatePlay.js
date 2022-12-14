import React from "react";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useContext } from "react";
import { songs } from "../Context";
import { useState } from "react";


export default function StatePlay() {
  const { Song } = useContext(songs);
  
 
  return (
    <div>
    
      <AudioPlayer src={Song.url} className="color-play" showJumpControls={true}
      autoPlay={true} autoPlayAfterSrcChange = {true}
      />

    </div>
  );
}

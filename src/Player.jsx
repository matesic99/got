
import React from "react";
import audio from '../src/assets/sound/got.mp3';


class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
<div className='flex justify-center align-center'>
<img src="./images/goldgot.png" onClick={() => this.playAudio()} className="w-30 h-30 mt-5" alt="logo" />
</div>
    );
  }
}

export default AudioTest
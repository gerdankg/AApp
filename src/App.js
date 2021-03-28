import React,{useState,useRef} from 'react';
import Library from './cmp/Library';
import Player from './cmp/Player';
import Song from './cmp/Song';
import './styles/app.scss';
import data from './util';

function App() {
  const audioRef=useRef(null);
  //STATE
  const [songs, setSongs] = useState(data());

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
})
const updateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
}




  return (
    <div className="App">
    <Song currentSong={currentSong}/>
    <Player  audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songInfo={songInfo} setSongInfo={setSongInfo}/>
    <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs}/>
    <audio onTimeUpdate={updateHandler} onLoadedMetadata={updateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;

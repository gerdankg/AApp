import React from 'react'
import LibarySong from './LibrarySong'

const Library = ({songs,setCurrentSong,audioRef,isPlaying,setSongs}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) =>  <LibarySong
                 setCurrentSong={setCurrentSong} 
                 song={song} songs={songs}
                  id={song.id} key={song.id}
                   audioRef={audioRef} 
                   isPlaying={isPlaying} setSongs={setSongs}/>)}
           
            </div>
            
        </div>
    )
}

export default Library

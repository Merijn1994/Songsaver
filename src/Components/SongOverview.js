import React, { Component } from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";
import SongListHeader from "./SongListHeader";

class SongOverview extends Component {

    constructor() {
      super()
      this.state = 
      {
        songs: []
      }
      this.addSong = this.addSong.bind(this)
    }
  
    addSong (song)  {
      if (song.title === "" && song.artist === "" ) {
        this.setState({
          songs:[
            ...this.state.songs
          ]
        })
      } else {
        this.setState({
          songs:[
            ...this.state.songs,
            { 
              title: song.title,
              artist: song.artist,
              genre: song.genre,
              rating: song.rating,
              id: this.state.songs.length + 1
            }
          ]
        })
      }
    }
  
    render() {
      return (
        <div>
            <h1>Song Saver</h1>
            <SongForm addSong={this.addSong}/>
            <SongListHeader />
            <div className="song-list">
              {this.state.songs.map(song => 
              <SongList key={song.id} song={song}/>)}
            </div> 
        </div>
      );
    }
  }
  
  export default SongOverview;
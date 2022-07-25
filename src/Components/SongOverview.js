import React, { Component } from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";


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
  
    render() {
      return (
        <div>
            <h1>Song Saver</h1>
            <SongForm addSong={this.addSong}/>
                <div className="song-header">
                  <p className="song-header__item">Song</p>
                  <p className="song-header__item">Artist</p>
                  <p className="song-header__item">Genre</p>
                  <p className="song-header__item">Rating</p>
                </div> 
            {this.state.songs.map(song => 
            <SongList key={song.id} song={song}/>)}
        </div>
      );
    }
  }
  
  export default SongOverview;
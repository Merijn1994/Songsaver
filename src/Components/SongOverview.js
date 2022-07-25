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
      this.clearList = this.clearList.bind(this)
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

    clearList () {
      this.setState({songs: []})
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
                  <button className="clear-button" onClick={this.clearList}>Clear List</button>
                </div>
            <div className="song-list">
              {this.state.songs.map(song => 
              <SongList key={song.id} song={song}/>)}
            </div> 
        </div>
      );
    }
  }
  
  export default SongOverview;
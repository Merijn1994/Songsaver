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

    handleSortButtons = event => {
    switch (event.target.value) {
      case "titleAscending":
      let titleAscending = this.state.songs.sort((a, b) => a.title.localeCompare(b.title))
      this.setState({
          songs: titleAscending
        })        
        break;
      case "titleDescending":
        let titleDescending = this.state.songs.sort((a, b) => b.title.localeCompare(a.title))
        this.setState({
          songs: titleDescending
        })
        break;
      case "artistAscending":
        let artistAscending = this.state.songs.sort((a, b) => a.artist.localeCompare(b.artist))
        this.setState({
          songs: artistAscending
        })        
        break;
      case "artistDescending":
        let artistDescending = this.state.songs.sort((a, b) => b.artist.localeCompare(a.artist))
        this.setState({
          songs: artistDescending
        })
        break;
      case "ratingDescending":
        let ratingDescending = this.state.songs.sort((a, b) => b.rating.localeCompare(a.rating))
        this.setState({
          songs: ratingDescending
        })
        break;
      case "ratingAscending":
        let ratingAscending = this.state.songs.sort((a, b) => a.rating.localeCompare(b.rating))
        this.setState({
          songs: ratingAscending
        })        
        break;
      default:
        break;
    }
  }
  
    render() {
      return (
        <div>
            <h1>Song Saver</h1>
            <SongForm addSong= {this.addSong}/>
            <table>
              <SongListHeader handleSortButtons = {this.handleSortButtons}
              />
                {this.state.songs.map(song => 
                <SongList key={song.id} song={song}/>)}
            </table>
        </div>
      );
    }
  }
  
  export default SongOverview;
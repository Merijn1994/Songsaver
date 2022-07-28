import React, { Component } from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";
import SongListHeader from "./SongListHeader";

class SongOverview extends Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [],
        filteredSongs: []
      }
      this.addSong = this.addSong.bind(this)
    }
  
    addSong (song)  {
      if (song.title === "" || 
          song.artist === "" ||
          song.genre === "" ||
          song.rating === "") {
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

    clearList = () => {
      this.setState({songs: []})
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
  
    filter = (filterValue) => {
      this.setState(prevState => {
        const filter = prevState.songs.filter(song => {
          if (filterValue.genreFilter !== "" && filterValue.ratingFilter !== "") {
          return song.genre === filterValue.genreFilter && song.rating === filterValue.ratingFilter
          } else if (filterValue.genreFilter !== "" && filterValue.ratingFilter === "") {
            return song.genre === filterValue.genreFilter
          } else if (filterValue.ratingFilter !== "" && filterValue.genreFilter === "") {
            return song.rating === filterValue.ratingFilter
          }
        })
        return {
          filteredSongs: filter
        }
      })
    }    
  
    render() {
      let songList = this.state.filteredSongs.length > 0 
      ? this.state.filteredSongs.map(song =><SongList key={song.id} song={song}/>) 
      : this.state.songs.map(song =><SongList key={song.id} song={song}/>)

      return (

        <div>
            <h1>Song Saver</h1>
            <SongForm addSong={this.addSong}/>
            <table>
              <SongListHeader filter={this.filter} clearList = {this.clearList} handleSortButtons = {this.handleSortButtons}/>
              { songList }
            </table>
        </div>
      );
    }
  }
  
  export default SongOverview;
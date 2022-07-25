import React, { Component } from "react"

class SongForm extends Component {

    constructor() {
        super()
        this.state = {
                title: "",
                artist: "",
                genre: "",
                rating: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return(
            <form 
                className="song-form"
                onSubmit={() => this.props.addSong(this.state)}
            >
                <input 
                    className="song-text"
                    type="text"
                    value={this.state.title} 
                    placeholder="Song"
                    name="title"
                    onChange={this.handleChange}
                />
                <input 
                    className="artist-text"
                    type="text"
                    value={this.state.artist}
                    placeholder="Artist"
                    name="artist"
                    onChange={this.handleChange}
                />
                <select 
                    className="genre-selection"
                    value={this.state.genre}
                    name="genre"
                    onChange={this.handleChange}
                >
                    <option>Select Genre</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="punk">Punk</option>
                    <option value="funk">Funk</option>
                    <option value="reggae">Reggae</option>
                    <option value="pop">Pop</option>
                    <option value="soul">Soul</option>
                </select>
                <select 
                    className="rating-selection"
                    value={this.state.rating}
                    name="rating"
                    onChange={this.handleChange}                        
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Add Song</button>
            </form>
        )
    }
}

export default SongForm
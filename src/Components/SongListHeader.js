import React from "react";

function SongListHeader () {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <p className="song-header__item">Artist</p>
            <p className="song-header__item">Genre</p>

            <select 
                className="genre-filter"
                name="genreFilter"
            >
                <option>Filter Genre</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="punk">Punk</option>
                <option value="funk">Funk</option>
                <option value="reggae">Reggae</option>
                <option value="pop">Pop</option>
                <option value="soul">Soul</option>
            </select>

            <p className="song-header__item">Rating</p>
            
            <select 
                className="rating-filter"
                name="ratingFilter"                      
            >
                <option >Filter Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default SongListHeader
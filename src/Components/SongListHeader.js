import React from "react";

function SongListHeader ( ) {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <button
                className="sort-buttons">A-Z</button>
            <button
                className="sort-buttons">Z-A</button>
            <p className="song-header__item">Artist</p>
            <button
                className="sort-buttons">A-Z</button>
            <button
                className="sort-buttons">Z-A</button>
            <p className="song-header__item">Genre</p>
            <p className="song-header__item">Rating</p>
            <button
                className="sort-buttons">5-1</button>
            <button
                className="sort-buttons">1-5</button>
        </div>
    )
}

export default SongListHeader
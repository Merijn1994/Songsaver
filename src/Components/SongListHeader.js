import React from "react";

function SongListHeader ( ) {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <p className="song-header__item">Artist</p>
            <p className="song-header__item">Genre</p>
            <p className="song-header__item">Rating</p>
        </div>
    )
}

export default SongListHeader
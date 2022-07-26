import React from "react";

function SongListHeader ( {clearList} ) {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <p className="song-header__item">Artist</p>
            <p className="song-header__item">Genre</p>
            <p className="song-header__item">Rating</p>
            <button className="clear-button" onClick={clearList}>Clear List</button>
        </div>
    )
}

export default SongListHeader
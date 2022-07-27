import React from "react";
import SongFilter from "./SongFilter";

function SongListHeader ( {filter} ) {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <p className="song-header__item">Artist</p>
            <p className="song-header__item">Genre</p>
            <p className="song-header__item">Rating</p>
            <SongFilter filter={filter} />

        </div>
    )
}

export default SongListHeader
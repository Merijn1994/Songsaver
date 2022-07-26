import React from "react";
import SongFilter from "./SongFilter";

function SongListHeader () {
    return (
        <div className="song-header">
            <p className="song-header__item">Song</p>
            <p className="song-header__item">Artist</p>
            <p className="song-header__item">Genre</p>
            <SongFilter>
            <p className="song-header__item">Rating</p>
            </SongFilter>

        </div>
    )
}

export default SongListHeader
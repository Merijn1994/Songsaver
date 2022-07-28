import React from "react";
import SongFilter from "./SongFilter";

function SongListHeader ( {filter} ) {
    return (
        <tr className="song-header">
            <th className="song-header__item">Song</th>
            <th className="song-header__item">Artist</th>
            <th className="song-header__item">Genre</th>
            <th className="song-header__item">Rating</th>
            <th><SongFilter filter={filter} /></th>
        </tr>
    )
}

export default SongListHeader
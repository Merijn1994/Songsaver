import React from "react";

function SongListHeader ( ) {
    return (
        <tr className="song-header">
            <th className="song-header__item">Song</th>
            <th className="song-header__item">Artist</th>
            <th className="song-header__item">Genre</th>
            <th className="song-header__item">Rating</th>
        </tr>
    )
}

export default SongListHeader
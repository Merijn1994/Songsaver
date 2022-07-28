import React from "react";

function SongListHeader ( {clearList} ) {
    return (
        <tr className="song-header">
            <th className="song-header__item">Song</th>
            <th className="song-header__item">Artist</th>
            <th className="song-header__item">Genre</th>
            <th className="song-header__item">Rating</th>
            <button className="clear-button" onClick={clearList}>Clear List</button>
        </tr>
    )
}

export default SongListHeader



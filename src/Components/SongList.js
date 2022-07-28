import React from "react"

function SongList({ song }) {
    return(
        <tr className="song-list-row">
            <td className="list-item">{song.title}</td>
            <td className="list-item">{song.artist}</td>
            <td className="list-item">{song.genre}</td>
            <td className="list-item">{song.rating}</td>
        </tr>
    )
}

export default SongList
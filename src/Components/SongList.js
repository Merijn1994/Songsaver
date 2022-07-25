import React from "react"

function SongList({ song }) {
    return(
            <div className="song-list-row">
                <p className="list-item">{song.title}</p>
                <p className="list-item">{song.artist}</p>
                <p className="list-item">{song.genre}</p>
                <p className="list-item">{song.rating}</p>
            </div>
    )
}

export default SongList
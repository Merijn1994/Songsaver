import React from "react";

function SongListHeader ({ handleSortButtons, clearList }) {
    return (
            <tr className="song-header">
                <th className="song-header__item">Song
                    <span className="title-buttons">
                        <button
                            className="sort-buttons-left"
                            onClick={handleSortButtons}
                            value="titleAscending"
                        >A-Z
                        </button>
                        <button
                            className="sort-buttons-right"
                            onClick={handleSortButtons}
                            value="titleDescending"
                        >Z-A
                        </button>
                    </span>
                </th>

                <th className="song-header__item">Artist
                    <span className="title-buttons">
                        <button
                            className="sort-buttons-left"
                            onClick={handleSortButtons}
                            value="artistAscending"
                        >A-Z
                        </button>
                        <button
                            className="sort-buttons-right"
                            onClick={handleSortButtons}
                            value="artistDescending"
                        >Z-A
                        </button>
                    </span>
                </th>

                <th className="song-header__item">Genre</th>
                <th className="song-header__item">Rating
                    <span className="title-buttons">
                        <button
                            className="sort-buttons-left"
                            onClick={handleSortButtons}
                            value="ratingDescending"
                        >5-1
                        </button>
                        <button
                            className="sort-buttons-right"
                            onClick={handleSortButtons}
                            value="ratingAscending"
                        >1-5
                        </button>
                    </span>
                </th>
                <button className="clear-button" onClick={clearList}>Clear List</button>
            </tr>
    )
}

export default SongListHeader

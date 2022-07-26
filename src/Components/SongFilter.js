import React, { Component } from "react";

class SongFilter extends Component {
    constructor() {
        super()
        this.state = {
            genreFilter: "",
            ratingFilter: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render () {
        return (
            <div>
                <select 
                    className="genre-filter"
                    name="genreFilter"
                    value={this.state.genreFilter}
                    onChange={this.handleChange}
                >
                    <option>Filter Genre</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="punk">Punk</option>
                    <option value="funk">Funk</option>
                    <option value="reggae">Reggae</option>
                    <option value="pop">Pop</option>
                    <option value="soul">Soul</option>
                </select>

                <select 
                    className="rating-filter"
                    name="ratingFilter"
                    value={this.state.ratingFilter}
                    onChange={this.handleChange}                      
                >
                    <option >Filter Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        )
    }
}

export default SongFilter
import { Component } from "react"
import "./search.css"
export default class Search extends Component {
    
    onChangeSearch = (event) => {
        this.props.handleSearch(event.target.value)
    }
   
    onImportant = () => {
         this.props.searchImportant()
    }
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="search" onChange={this.onChangeSearch}/>
                <button className="search-btn-all" >All</button>
                <button className="search-btn-done" >Done</button>
                <button className="search-btn-important" onClick={this.onImportant}>Important</button>
            </div>
        )
    }
}


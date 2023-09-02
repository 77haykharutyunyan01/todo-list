import { Component } from 'react';
import "./header.css"
class Header extends Component{
    render(){
        return (
            <div className="header">
                <h1> My Todo List <span>Done:12  Important:34</span></h1>
                </div>
            )
    }
}
export default Header
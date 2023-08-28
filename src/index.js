import React from 'react';
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList"
import NewList from './components/NewList';


const App = () => {

    return ( 
        <div>
            <Header/>
            <Search/>
            <TodoList/>
            <NewList/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
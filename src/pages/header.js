import React from 'react';
import './../css/header.css'
function header(){
    return(
        <header className="App-header">
            <ul>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </header>
    );
}
export default header;
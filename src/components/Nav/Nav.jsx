import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav ({onSearch, random}) {
    
    return(
    <div>
        <SearchBar onSearch={onSearch} random={random}/>
        <Link to='/about'>ABOUT</Link>
        <div>
        <Link to='/home'>HOME</Link>
        </div>
        
    </div>
              )
}



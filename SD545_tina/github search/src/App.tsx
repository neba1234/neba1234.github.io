import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import User from "./types/user";
import SearchReponse from "./types/search-response";

export default function App() {
   

    return (
        <div className="container">
            <Search />
            <List /> 
        </div>
    )
}

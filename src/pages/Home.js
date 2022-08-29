import React from "react";
import SearchForm from '../components/SearchForm'
import ListCockTails from '../components/ListCocktails'

const Home = () =>{
    return <main className="section">
        <SearchForm />
        <ListCockTails />
    </main>
}

export default Home
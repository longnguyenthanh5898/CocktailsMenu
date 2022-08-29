import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";


const SearchForm = () =>{
    const { setSearchValue} = useGlobalContext()
    const inputValue = useRef()
    useEffect(()=>{
        inputValue.current.focus()
    }, [])

    
    return (
        <section className="section search-form">
            <div className="search-center">
                <label><h3>Searching your cocktails</h3></label>
                <input
                    type="text"
                    ref={inputValue}
                    onChange={() =>setSearchValue(inputValue.current.value)}
                    
                />
            </div>
            
        </section>
    )
}

export default SearchForm
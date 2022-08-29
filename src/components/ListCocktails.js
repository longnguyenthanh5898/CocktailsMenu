import React, { useContext } from "react";
import Cocktail from './Cocktail'
import { useGlobalContext } from "../context";

const ListCocktails = () =>{
    const {cocktails} = useGlobalContext()
    if (cocktails.length < 1) {
        return (
          <h2 className='section-title'>
            no cocktails matched your search 
          </h2>
        )
      }
    return(
        <section className="listCoctails-section">
            <h2 className="section-title">Cocktails</h2>
            <div className="list-cocktails">
                {cocktails.map((item) =>{
                    
                return <Cocktail key={item.id} {...item} />   
                }
                )}
            </div>

        </section>
    ) 
}

export default ListCocktails
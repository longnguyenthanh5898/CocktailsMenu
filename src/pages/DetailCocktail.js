import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const DetailCocktail = () =>{

    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    React.useEffect(() =>{
        
        const fetchDetail = async() =>{
            try {
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                
                if(data.drinks){
                    const {
                            strDrink: name,
                            strCategory: category,
                            strAlcoholic: alcoholic,
                            strDrinkThumb: img,
                            strGlass: glass,
                            strInstructions: instructions,
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5,
                                           
                    } = data.drinks[0]
                    const   ingradients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newDetailCocktail = {
                        name,
                        category,
                        alcoholic,
                        img,
                        glass,
                        instructions,
                        ingradients
                    } 

                    setDetail(newDetailCocktail)
                }
                else{
                    setDetail(null)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchDetail()
    }, [id])

    if(! detail){
        return (
            <h2 className="section-title">No cocktails</h2>
        )
    } else{
        const {
            name,
            category,
            alcoholic,
            img,
            glass,
            ingradients,
            instructions
        } = detail
        return (
            <section className="section detail-section">
                <Link to='/' className="cocktail-btn detail-btn btn">Home</Link>
                <h1 className="section-title">{name}</h1>

                <div className="detail-coctail">

                    <div className="detail-img">
                        <img src={img}></img>
                    </div>

                    <div className="detail-info">
                        <p>
                            <span className="detail-span">Name</span>
                            {name}
                        </p>

                        <p>
                            <span className="detail-span">Category :</span>
                            {category}
                        </p>

                        <p>
                            <span className="detail-span">Info :</span>
                            {alcoholic}
                        </p>

                        <p>
                            <span className="detail-span">Glass :</span>
                            {glass}
                        </p>

                        <p>
                            <span className="detail-span">Instructions :</span>
                            {instructions}
                        </p>

                        <p>
                            <span className="detail-span">Ingredients :</span>
                            {ingradients.map((item) =>{
                                return <span className="detail-ingre">{item}</span>
                            })}
                        </p>



                        


                    </div>
                </div>
                
            </section>
        )
    }

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default DetailCocktail
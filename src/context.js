import React, { useContext, useEffect, useState } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('a')
    const [cocktails, setCockTails] = useState([])

    const fetchDrinks = async() =>{
        try {
            const response = await fetch(`${url}${searchValue}`)
            const data = await response.json()
            
            const {drinks} = data
            if(drinks){
                const newCocktail = drinks.map((item) =>{
                    const {
                        idDrink, 
                        strDrink,
                        strAlcoholic,
                        strCategory,
                        strDrinkThumb
                    } = item
                    return {
                        id: idDrink,
                        name:  strDrink,
                        alcoholic: strAlcoholic,
                        category: strCategory,
                        img: strDrinkThumb
                    }
                })
                setCockTails(newCocktail)
            } else{
                setCockTails([])
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        fetchDrinks()
    }, [searchValue])
    
    
    return(
        <AppContext.Provider value={{
            loading,
            searchValue,
            cocktails,
            setSearchValue
        }}>{children}</AppContext.Provider>
    ) 
}



export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export  {AppContext, AppProvider}

import React, { useState, useEffect } from 'react';
import './app.css';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import RecipeCards from './RecipeCards'

const RecipeList = () => {
    const [data,setData]= useState("");
    const [recipes,setRecipes]= useState([]);
    
    const APP_ID = "ac7e3364"
    
    const APP_KEY= "ba83ace9bccdf4466644312669ec3369";
    
    const url = `https://api.edamam.com/search?q=${data}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    // const url='https://bw-secret-family-recipes0.herokuapp.com/api/recipes/recipelist'
    const getData = async () => {
          const result = await axios.get(url);
          console.log(result);
          setRecipes(result.data.hits);
          setData("");
          
      };

    
    const onSubmit= (e)=>{
        e.preventDefault();
        getData();
    }
    
    const onChange= e=> {
        setData(e.target.value);
    }
    return (
        <div className="cards-container">
            <h1 className="tagH1" onClick={getData}>RECIPES</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input className="inputSearch" type="text" placeholder="Search Food" autoComplete="off" onChange={onChange}/>
                <button className="buttonSearch" type="submit" value="search">SEARCH</button>
            </form>
            <div className="recipes">
                {recipes !== []&& recipes.map(recipe =>
                <RecipeCards key={uuidv4()} recipe={recipe}/>)}
                
            </div>
        </div>
    )
}

export default RecipeList

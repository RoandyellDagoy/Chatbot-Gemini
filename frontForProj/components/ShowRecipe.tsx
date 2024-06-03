import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export type RecipeChar = {
  id: number;
  recipe_name: string;
  ingredients: string;
  instructions: string;
  cook_time: string;
  prep_time: string;

}

const ShowRecipe = () => {
  const [recipes, setRecipes] = useState<RecipeChar[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/all');
      setRecipes(response.data);
    } catch (error) {
      console.error('error fetching data', error);
    }
    
  };

  return (
    <View>
      <Text>Menu:</Text>
      {recipes.map((recipes: RecipeChar,index : number) =>(
       <View key={index}>
         <Text>Id: {recipes.id}</Text>
         <Text>Recipe Name: {recipes.recipe_name}</Text>
         <Text>Ingredients: {recipes.ingredients}</Text>
         <Text>Instructions: {recipes.instructions}</Text>
         <Text>Cook Time: {recipes.cook_time}</Text>
         <Text>Preparation Time: {recipes.prep_time}</Text>
       </View>
      ))}
    </View>
  );
};

export default ShowRecipe
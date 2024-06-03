import { View, Text, TextInput , Button, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const CreateRecipe = () => {

const [recipeName, setRecipeName] = useState('');
const [Ingredients, setIngredients] = useState('');
const [Instructions, setInstructions] = useState('');
const [cookTime, setCookTime] = useState('');
const [prepTime, setPrepTime] = useState('');

const handleSubmit = () =>{
    axios.post('http://192.168.101.11:3000/api/addRecipe', {
        recipe_name: recipeName,
        ingredients: Ingredients,
        instructions: Instructions,
        prep_time: prepTime,
        cook_time: cookTime
        
    })
        .then(response =>{
            console.log('Recipe added to menu: ', response.data);
            
            setRecipeName('');
            setIngredients('');
            setInstructions('');
            setCookTime('');
            setPrepTime('');
        
        })
        .catch(error =>{
            console.error('Error adding to menu: ', error);
        });
}

  return (
    <View>
      <Text>Recipe Name: </Text>
      <TextInput value={recipeName} onChangeText={text => setRecipeName(text)}/>

      <Text>Ingredients:  </Text>
      <TextInput value={Ingredients} onChangeText={text => setIngredients(text)}/>

      <Text>Instructions: </Text>
      <TextInput value={Instructions} onChangeText={text => setInstructions(text)}/>

      <Text>Cook Time: </Text>
      <TextInput value={cookTime} onChangeText={text => setCookTime(text)}/>

      <Text>Preparation Time: </Text>
      <TextInput value={prepTime} onChangeText={text => setPrepTime(text)}/>

      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  )
}

export default CreateRecipe
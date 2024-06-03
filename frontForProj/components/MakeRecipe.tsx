import { View, Text, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const MakeRecipe = () => {
  const [id , setID] = useState('');
  const parsedID = parseInt(id)
  const [recipeName, setRecipeName] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const updateData = async () =>{
    try{
      const response = await axios.put(`/api/recipe/${parsedID}`, {
        recipe_name: recipeName,
        ingredients: Ingredients,
        instructions: Instructions,
        prep_time: prepTime,
        cook_time: cookTime
      });
      console.log(response.data);
      setID('');
      setRecipeName('');
      setIngredients('');
      setInstructions('');
      setPrepTime('');
      setCookTime('');
    }catch(error){
      console.error('Error adding menu' , error)
    }
  }

  return (
    <View>
      <Text>Recipe ID: </Text>
      <TextInput value={id} onChangeText={setID} placeholder='Enter ID'/>

      <Text>Recipe Name: </Text>
      <TextInput value={recipeName} onChangeText={setRecipeName} placeholder='Enter Recipe Name'/>

      <Text>Ingredients:  </Text>
      <TextInput value={Ingredients} onChangeText={setIngredients} placeholder='Enter ingredients'/>

      <Text>Instructions: </Text>
      <TextInput value={Instructions} onChangeText={setInstructions} placeholder='Enter instructions'/>


      <Text>Preparation Time: </Text>
      <TextInput value={prepTime} onChangeText={setPrepTime} placeholder='Enter Preparation Time'/>


      <Text>Cook Time: </Text>
      <TextInput value={cookTime} onChangeText={setCookTime} placeholder='Enter Cooking Time'/>


      <Button title="Update Menu" onPress={updateData}/>
    </View>
  )
}

export default MakeRecipe
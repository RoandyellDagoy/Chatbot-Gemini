import { View, Text, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const deleteMenu = () => {
    const[id ,setId] = useState('');
    const handleDelete = () =>{

        axios.delete(`api/delt/${id}`)
            .then(response => {
                console.log(response.data);

                setId('');
            })
            .catch(error =>{
                console.error('Deleting Error: ', error)
            })
    }
  return (
    <View>
        <TextInput placeholder= "Enter Menu ID to delete: " value={id} onChangeText={setId}  
        keyboardType= "numeric"/>

        <Button title= 'Delete' onPress={handleDelete}/>

    </View>
  )
}

export default deleteMenu
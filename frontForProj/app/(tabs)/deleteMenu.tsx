import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import DeleteRecipe from '@/components/DeleteRecipe'

const deleteMenu = () => {
  return (
    <SafeAreaView>
        <View style={{paddingTop: 90, alignItems: 'center'}}>
            <DeleteRecipe/>
        </View>
        
    </SafeAreaView>
  )
}

export default deleteMenu
import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import MakeRecipe from '@/components/MakeRecipe'


const updateMenu = () => {
  return (
    <SafeAreaView>
        <View style={{paddingTop: 35}}>
            <MakeRecipe/>
        </View>
    </SafeAreaView>
  )
}

export default updateMenu
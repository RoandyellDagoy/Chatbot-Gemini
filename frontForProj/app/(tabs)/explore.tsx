import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import CreateRecipe from '@/components/CreateRecipe'

const explore = () => {
  return (
    <SafeAreaView>
      <View style={{paddingTop: 90, alignItems: 'center'}}>
        <CreateRecipe/>
      </View>
    </SafeAreaView>
  )
}

export default explore
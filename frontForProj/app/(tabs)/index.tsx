import { View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import ShowRecipe from '@/components/ShowRecipe'



const Home = () => {
  return (
   <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight, alignItems:'center'}}>
    <ShowRecipe/>
   </SafeAreaView>
  )
}

export default Home
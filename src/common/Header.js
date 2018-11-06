import React from 'react'
import { Text, View } from 'react-native'

const Header = ({children}) =>{
    return(
        <View style = {styles.container}>
        <Text>{children}</Text>
        </View>
    )
}

const styles = {
    container: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      position: 'relative',
      borderWidth : 1
    },
  };
  

export default Header;
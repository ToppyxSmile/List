import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({value, onChangeText, children, placeholder, secureTextEntry}) => {   
        const {views, text, textinput} = styles
        return (
            <View style = {views}>
                <Text style={text}>{children}</Text>
                    <TextInput 
                        style={textinput}
                        value={value}
                        onChangeText={onChangeText}
                        autoCorrect={false}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                    />
            </View>
        )
      
}

const styles = {
    views : {
        flex : 1,
        flexDirection : 'row',
        height : 40
    },
    text : {
        flex : 1,
        paddingLeft : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textinput : {
        flex : 2,
        paddingLeft : 5,
        
        
    }
}
export default Input;
import React from 'react'
import {View ,Text, Modal} from 'react-native'
import CardSection from './CardSection'
import Button from './Button'

const Confirm = ({visible, children, Accept, Deny})=>{
    const {Viewstyle, CardStyle, TextStyle} = styles
    return(
        <Modal
        visible={visible}
        transparent
        animationType={'slide'}
        onRequestClose={() => {}}
        >
            <View style={Viewstyle}>
                <CardSection style={CardStyle}>
                    <Text style={TextStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={Accept}>Yes</Button>
                    <Button onPress={Deny}>Nah</Button>
                </CardSection>
            </View>
        </Modal>
    )
}
const styles ={
    Viewstyle : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    CardStyle : {
        justifyContent : 'center'
    },
    TextStyle : {
        flex : 1,
        textAlign : 'center'
        
    }
}

export default Confirm;
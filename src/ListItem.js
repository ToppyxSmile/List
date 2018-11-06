import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {Actions} from 'react-native-router-flux'
import  CardSection  from './common/CardSection';
 
class ListItem extends Component {

  render() {
    const { name } = this.props.employee;
 
    return (
        <TouchableWithoutFeedback onPress={()=>Actions.ListEdit({employee: this.props.employee})}>
        <View>
            <CardSection>
                <Text>
                {name}
                </Text>
            </CardSection>
        </View>
        </TouchableWithoutFeedback>
    );
  }
}
export default ListItem;

import React,{Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {nameChange} from './Actions'
import CardSection from './common/CardSection'
import Input from './common/Input'

class ListForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input onChangeText={text=>this.props.nameChange({props: 'name', value: text})} value={this.props.name} >Name</Input>
                </CardSection>
                <CardSection>
                    <Input onChangeText={text=>this.props.nameChange({props: 'detail', value: text})} value={this.props.detail}>Detail</Input>
                </CardSection>
            </View>
        )
    }
}
const mapSaatetoProps = state =>{
    return {
        name : state.list.name,
        detail : state.list.detail
    }
}

export default connect(mapSaatetoProps,{nameChange})(ListForm);
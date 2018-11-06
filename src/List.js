import React,{Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {nameChange, Push} from './Actions'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import ListForm from './ListForm'

class List extends Component{
    Push(){
        const {name, detail} = this.props
        this.props.Push({ name, detail })
    }
    render(){
        
        return(
            <View>
                <ListForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.Push.bind(this)}>Create</Button>
                </CardSection>
            </View>
        
        )
    }
}
const mapStatetoProps = state => {
    const {name , detail} =state.list
    return{
        name: name,
        detail : detail
    }
}

export default connect(mapStatetoProps,{nameChange,Push})(List);
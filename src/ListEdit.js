import React,{Component} from'react'
import _ from 'lodash'
import {View} from 'react-native'
import {connect} from 'react-redux'
import ListForm from './ListForm'
import {nameChange, Save, Delete} from './Actions'
import CardSection from './common/CardSection'
import Button from './common/Button'
import Confirm from './common/Confirm'

class ListEdit extends Component{
    state = {visible : false}
    componentWillMount() {
        _.each(this.props.employee, (value, props) => {
          this.props.nameChange({ props, value });
        });
    }
   onSave(){
       const {name, detail} = this.props
       this.props.Save({name ,detail ,uid: this.props.employee.uid})
   }
   trigger(){
        this.setState({visible : !this.state.visible})
   }
   Deny(){
        this.setState({visible : false})
   }
   Accept(){
       const {uid} = this.props.employee
       this.props.Delete({uid})
       this.setState({visible : false})
   }
     
    render(){
        
        return(
            <View>
                <ListForm />
                <CardSection>
                    <Button onPress={this.onSave.bind(this)}>Save Change</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.trigger.bind(this)}>Delete</Button>
                </CardSection>
                <Confirm
                visible={this.state.visible}
                Deny={this.Deny.bind(this)}
                Accept={this.Accept.bind(this)}
                >
                Delet?
                </Confirm>

                
            </View>
            
        )
    }
}
const mapStatetoProps = state =>{
    return{
        name : state.list.name,
        detail : state.list.detail
    }
}

export default connect(mapStatetoProps,{nameChange,Save, Delete})(ListEdit);
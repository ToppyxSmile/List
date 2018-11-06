import React,{Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {EmailChange, PasswordChange,SignIn} from './Actions'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'

class Auth extends Component{
   
    onEmailChange(text) {
        this.props.EmailChange(text);
      }
     
      onPasswordChange(text) {
        this.props.PasswordChange(text);
      }
     
      onButtonPress() {
        const { email, password } = this.props;
     
        this.props.SignIn({ email, password });
      }
     
    render(){
        
        
        return(
            <View>
                <CardSection>
                    <Input onChangeText={(text)=>this.props.EmailChange(text)} >Email</Input>
                </CardSection>
                <CardSection>
                    <Input onChangeText={text=>this.props.PasswordChange(text)} secureTextEntry>Password</Input>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >Sign In</Button>
                </CardSection>
                
            </View>
        )
    }
}
const mapStatetoProps = state =>{
    return{
    email : state.auth.email,
    password : state.auth.password
    }
}

export default connect(mapStatetoProps,{EmailChange,PasswordChange,SignIn})(Auth);
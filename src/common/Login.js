import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native' 
import firebase from 'firebase'   
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';
import Spiner1 from './Spinner1';
    
class Login extends Component {

    state = {   email : '',
                password : '',
                error : '',
                loading : false
    }

    onButtonPress() {
        const { email, password } = this.state;
     
        this.setState({ error: '', loading: true });
     
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuceess.bind(this))
            .catch(this.loginFailed.bind(this))
    }

    loginSuceess(){
        this.setState({
            email : '',
            password : '',
            error : '',
            loading : false
        })
    }
    loginFailed(){
        this.setState({
            error : 'Authentication Failed.',
            loading : false
        })
    }
    
    singupButton(){
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSuceess.bind(this))   
    }
     

    renderButton() {
        if (this.state.loading) {
          return <Spinner size="small" />;
        }
     
        return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        );
      }
    renderSignup(){
        if (this.state.loading){
            return <Spiner1 size="small" />
        }
        return(
            <Button onPress={this.singupButton.bind(this)}>
            Sign up
          </Button>
        )
    }

  
    

    render(){
        return(
            
            <Card>               
                <CardSection>
                     <Input 
                        placeholder={'Email'} 
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}
                        >
                        Email
                     </Input>  
                </CardSection>

                <CardSection>
                    <Input 
                    placeholder={'password'} 
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password})}
                    secureTextEntry
                    >
                    Password
                    </Input>                  
                </CardSection>

                <Text style={styles.errorTextStyle}>
                        {this.state.error}
                </Text> 
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    {this.renderSignup()}
                </CardSection>

                


            </Card>
            
        )
    }
}

const styles = {
    errorTextStyle: {
      alignSelf: 'center',
      color: 'red'
    }
  };

export default Login;
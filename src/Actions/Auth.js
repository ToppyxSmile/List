import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const EmailChange = text =>{
    return {
        type : 'EmailChange',
        payload : text
    }
}
export const PasswordChange = text =>{
    return {
        type : 'PasswordChange',
        payload : text
    }
}

export const SignIn = ({email, password}) =>{
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user =>
            LoginSucess(dispatch, user)
        )
    }   
}

const LoginSucess = (dispatch , user)=>{
    dispatch({
        type : 'LoginSucess',
        payload : user
    })
    Actions.AddList({type : 'reset'});
}
        


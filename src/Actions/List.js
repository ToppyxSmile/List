import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const Push = ({name, detail})=> {
    const {currentUser}= firebase.auth()
    const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`)
    return(dispatch)=>{
        employees.push({name, detail})
        .then(()=>dispatch({
            type : 'Push'
        }))
        Actions.AddList({type: 'reset'});
    }
    
}

export const Fetch = () => {
    const { currentUser } = firebase.auth();
    const employees = firebase.database().ref(`/users/${currentUser.uid}/employees`);
   
    return (dispatch) => {
      employees.on('value', snapshot => {
        dispatch({
          type: 'Fetch',
          payload: snapshot.val()
        });
      });
    };
  };

export const nameChange = ({props,value})=>{
    return{
        type : 'nameChange',
        payload : {props, value}
    }
}

export const Save = ({name, detail,uid})=>{
    const {currentUser} = firebase.auth()
    const employee = firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`);
 
  return (dispatch) => {
    employee.set({ name, detail })
      .then(() => dispatch({
          type : 'saveComplete'
      }));
      Actions.AddList({type: 'reset'})
  };
}

export const Delete =({uid}) =>{
    const {currentUser} = firebase.auth()
    const employee = firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`);

    return()=>{
        employee.remove()
        .then(()=>{
            Actions.AddList({type: 'reset'})
        })
        
    }
}

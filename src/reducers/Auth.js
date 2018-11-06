const init ={
    email : '',
    passwrod : '',
    user : null
}

export default (state=init,action) =>{
    switch(action.type){
        case 'EmailChange':
        return {...state, email : action.payload}
        case 'PasswordChange':
        return {...state, password : action.payload}
        case 'LoginSucess':
        return {...state, user : action.payload}
    }
    return state;
}
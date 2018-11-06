const init={
    name : '',
    detail : ''
    
}

export default( state= init , action)=>{
    switch(action.type){        
        case 'nameChange':
        return {...state, [action.payload.props]:action.payload.value}
        case 'Push' :
        return init;
        case 'saveComplete' :
        return init;
    }
    return state;
}
const init ={}

export default (state=init, action)=>{
    switch (action.type){
        case 'Fetch':
        return action.payload       
    }
    return state;
}
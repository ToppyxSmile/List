import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import {Actions} from 'react-native-router-flux'
import Auth from './Auth'
import List from './List'
import AddList from './AddList'
import ListEdit from './ListEdit';


const RouterComponent = ()=>{
    return(
        <Router>
            <Scene key='root'>
                <Scene key='Auth' component={Auth} title='Auth' />
                <Scene key='AddList' component={AddList} title='Add List' onRight={()=>Actions.list()} rightTitle='Add'/>
                <Scene key='list' component={List} title='List' />
                <Scene key='ListEdit' component={ListEdit} title='Edit'/>      
            </Scene>
        </Router>
    )
}

export default RouterComponent
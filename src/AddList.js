import React,{Component} from 'react'
import _ from 'lodash'
import {ListView, View} from 'react-native'
import {connect} from 'react-redux'
import {Fetch} from './Actions'
import ListItem from './ListItem'

class AddList extends Component{
    componentWillMount(){
        this.props.Fetch()
        this.createDataSource(this.props);       
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    } 
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.datasource = ds.cloneWithRows(employees);
    }
    renderRow(employee) {
        return <ListItem employee={employee} />;
    }
    render(){
        
        return(
            <ListView
            enableEmptySections
            dataSource={this.datasource}
            renderRow={this.renderRow}
          />
        )
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employee, (val, uid) => {
        return { ...val, uid }; 
    });  
    return { employees };
};


export default connect(mapStateToProps,{Fetch})(AddList);
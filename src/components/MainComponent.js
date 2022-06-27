import React, { Component } from 'react';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import { DEPARTMENTS } from '../staffs';
import { ROLE } from '../staffs';
import { STAFFS } from '../staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import SearchBar from './SearchBarComponent';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departments: DEPARTMENTS,
            roles: ROLE,
            staffs: STAFFS,
            numberOfColumn: 3
        }

        this.handleOption = this.handleOption.bind(this);
        
    }

    handleOption(e) {
        e.preventDefault();
        this.setState({ numberOfColumn: e.target.value });
    }

    render() {
        const StaffDetail = ({match}) => {
            return (
                <StaffInfo selectedStaff={ this.state.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]} />
            );
        }



        return (
            <div>
                <Header />
                <ColumnDisplay onClick={(e) => this.handleOption(e)} />
                <SearchBar />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staff={this.state.staffs} column={this.state.numberOfColumn} />} />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route path="/departments" component={() => <Department department={this.state.departments} column={this.state.numberOfColumn} />} />
                    <Route path="/salaries" component={() => <Salary staff={this.state.staffs} column={this.state.numberOfColumn}/>} />
                    <Redirect to="/staffs" />
                </Switch>
            </div>
        );
    }
}

export default Main;
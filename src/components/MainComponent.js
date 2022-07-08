import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import { DEPARTMENTS } from '../staffs';
import { STAFFS } from '../staffs';
import AddStaff from './AddStaffComponent';

let newStaffs = JSON.parse(localStorage.getItem('newStaffs'));

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departments: DEPARTMENTS,
            staffs: newStaffs? newStaffs : STAFFS,
            numberOfColumn: 3      
        }

        this.handleOption = this.handleOption.bind(this);
        this.addStaff = this.addStaff.bind(this);
    }

    handleOption(e) {
        e.preventDefault();
        this.setState({ numberOfColumn: e.target.value });
    }

    addStaff(addStaffData) {
        this.setState({
            staffs: addStaffData
        });

        localStorage.setItem('newStaffs', JSON.stringify(addStaffData));
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
                <AddStaff staffs={this.state.staffs} addStaff={this.addStaff}
                    touched={this.state.touched} departments={this.state.departments} />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList
                        departments={this.state.departments}
                        staffs={this.state.staffs}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route path="/departments" component={() => <Department
                        department={this.state.departments}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/salaries" component={() => <Salary
                        staff={this.state.staffs}
                        column={this.state.numberOfColumn} />}
                    />
                    <Redirect to="/staffs" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);
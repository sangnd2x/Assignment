import React, { Component } from 'react';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import AddStaff from './AddStaffComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewStaff } from '../actions/search';

const newStaffs = JSON.parse(localStorage.getItem('newStaffs'));

const mapStateToProps = state => {
    return {
        departments: state.departments,
        roles: state.roles,
        staffs: state.staffs,
        numberOfColumn: state.numberOfColumn
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: newStaffs? newStaffs : this.props.staffs,
            numberOfColumn: this.props.numberOfColumn
        }

        this.handleOption = this.handleOption.bind(this);
        this.addStaffCallBack = this.addStaffCallBack.bind(this);
    }

    handleOption(e) {
        e.preventDefault();
        this.setState({ numberOfColumn: e.target.value });
    }

    addStaffCallBack(addStaffData) {
        this.props.addNewStaff(addStaffData);
        
        const newStaffArr = newStaffs? [...newStaffs, addStaffData] : [...this.state.staffs, addStaffData]
        
        this.setState({
            staffs: newStaffArr
        });

        newStaffs ? localStorage.setItem('newStaffs', JSON.stringify([...newStaffs, addStaffData])) : localStorage.setItem('newStaffs', JSON.stringify([...this.state.staffs, addStaffData]));
        
    }

    render() {
        const StaffDetail = ({match}) => {
            return (
                <StaffInfo selectedStaff={ this.props.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <ColumnDisplay onClick={(e) => this.handleOption(e)} />
                <AddStaff staffs={this.props.staffs} addStaffCallBack={this.addStaffCallBack}
                    touched={this.props.touched} departments={this.props.departments} />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList
                        departments={this.props.departments}
                        staffs={this.state.staffs}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route path="/departments" component={() => <Department
                        department={this.props.departments}
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

export default withRouter(connect(mapStateToProps, {addNewStaff})(Main));
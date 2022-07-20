import React, { Component } from 'react';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Departments from './DepartmentComponent';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import AddNewStaff from './AddNewStaffComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewStaff } from '../actions/ActionsCreator';
import { fetchStaffs, fetchDepartments, fetchSalaries } from '../actions/ActionsCreator';

const newStaffs = JSON.parse(localStorage.getItem('newStaffs'));

const mapStateToProps = state => {
    return {
        departments: state.departments,
        roles: state.roles,
        staffs: state.staffs,
        salaries: state.salaries,
        numberOfColumn: 3
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => {dispatch(fetchStaffs())},
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    fetchSalaries: () => {dispatch(fetchSalaries())}
});

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

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalaries();
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
                <StaffInfo selectedStaff={ this.props.staffs.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <ColumnDisplay onClick={(e) => this.handleOption(e)} />
                <AddNewStaff staffs={this.props.staffs} addStaffCallBack={this.addStaffCallBack}
                    touched={this.props.touched} departments={this.props.departments} />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList
                        staffs={this.props.staffs.staffs}
                        staffsLoading={this.props.staffs.isLoading}
                        staffsError={this.props.staffs.errorMess}
                        departments={this.props.departments}
                        column={this.props.numberOfColumn} />}
                    />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route path="/departments" component={() => <Departments
                        departments={this.props.departments.departments}
                        deparmentsLoading={this.props.departments.isLoading}
                        deparmentsError={this.props.departments.errorMess}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/salaries" component={() => <Salary
                        salaries={this.props.salaries.salaries}
                        salariesLoading={this.props.salaries.isLoading}
                        salariesError={this.props.salaries.errorMess}
                        column={this.state.numberOfColumn} />}
                    />
                    <Redirect to="/staffs" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import React, { Component } from 'react';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Departments from './DepartmentsComponent';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import DeptStaffs from './DepartmentsWithIdComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaffs, fetchDepartments, fetchSalaries, postStaff, deleteStaff, updateStaff } from '../actions/ActionsCreator';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    fetchSalaries: () => { dispatch(fetchSalaries()) },
    postStaff: (newStaff) => { dispatch(postStaff(newStaff)) },
    deleteStaff: (staffId) => { dispatch(deleteStaff(staffId)) },
    updateStaff: (staff, staffId) => {dispatch(updateStaff(staff, staffId))}
});

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfColumn: this.props.numberOfColumn
        }

        this.handleOption = this.handleOption.bind(this);
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

    render() {
        const StaffDetail = ({ match }) => {
            return (
                <StaffInfo
                    selectedStaff={this.props.staffs.staffs.filter(staff => staff.id === parseInt(match.params.staffId, 10))[0]}
                    departments={this.props.departments.departments}
                    deleteStaff={this.props.deleteStaff}
                    updateStaff={this.props.updateStaff}
                />
            );
        }

        const DeptDetails = ({match}) => {
            return (
                <DeptStaffs
                    selectedDept={this.props.departments.departments.filter(dept => dept.id === match.params.deptId)[0]}
                    staffs={this.props.staffs.staffs}
                    departments={this.props.departments.departments}
                    numberOfColumn={this.state.numberOfColumn} />
            );
        }

        return (
            <div>
                <Header />
                <ColumnDisplay onClick={(e) => this.handleOption(e)} />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList
                        staffs={this.props.staffs.staffs}
                        staffsLoading={this.props.staffs.isLoading}
                        staffsError={this.props.staffs.errorMess}
                        postStaff={this.props.postStaff}
                        departments={this.props.departments.departments}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route exact path="/departments" component={() => <Departments
                        departments={this.props.departments.departments}
                        deparmentsLoading={this.props.departments.isLoading}
                        deparmentsError={this.props.departments.errorMess}
                        column={this.state.numberOfColumn} />}
                    />
                    <Route path="/departments/:deptId" component={DeptDetails} />
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
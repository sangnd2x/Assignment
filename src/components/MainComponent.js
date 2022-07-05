import React, { Component } from 'react';
import Header from './HeaderComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ColumnDisplay from './ColumnDisplayComponent';
import StaffInfo from './StaffInfoComponent';
import Salary from './SalaryComponent';
import { connect } from 'react-redux';

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

        this.handleOption = this.handleOption.bind(this);
        
    }

    handleOption(e) {
        e.preventDefault();
        this.setState({ numberOfColumn: e.target.value });
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
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList dept={this.props.departments}  staffs={this.props.staffs} column={this.props.numberOfColumn} />} />
                    <Route path="/staffs/:staffId" component={StaffDetail} />
                    <Route path="/departments" component={() => <Department department={this.props.departments} column={this.props.numberOfColumn} />} />
                    <Route path="/salaries" component={() => <Salary staff={this.props.staffs} column={this.props.numberOfColumn}/>} />
                    <Redirect to="/staffs" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
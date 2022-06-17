import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { STAFFS } from './staffs';
import StaffList from './components/staffListComponent';
import ColumnDisplay from './components/columnDisplayComponent';


class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <ColumnDisplay />
      </div>
    );
  }
}

export default App;

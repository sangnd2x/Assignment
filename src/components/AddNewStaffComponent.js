import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";


// From validations
const required = val => val && val.length;

const maxLength = len => val => !(val) || (val.length <= len);

const minLength = len => val => !(val) || (val.length >= len);


class AddNewStaff extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFormOpen: false,
            newStaff: {
                name: '',
                doB: '',
                salaryScale: 1.0,
                startDate: '',
                departmentId: 'Dept01',
                annualLeave: 1.0,
                overTime: 0.0,
            },
            touched: {
                name: false,
                doB: false,
                startDate: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.nextStaffId = this.nextStaffId.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({ isFormOpen: !this.state.isFormOpen })
    }

    nextStaffId(staff) {
        const nextStaffId = staff.length + 1;
        return nextStaffId;
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = name === 'departmentId' ? this.props.departments.filter(dept => dept.name.includes(target.value))[0].id : target.value;

        this.setState({
            newStaff: {
                ...this.state.newStaff,
                id: this.nextStaffId(this.props.staffs),
                [name]: value,
                image: '/assets/images/alberto.png'
            }
        });
    }

    handleSubmit(e) {
        const newStaff = this.state.newStaff;
        this.props.postStaff(newStaff);
        this.toggleForm();
    }

    render() {

        return (
            <div className="container">
                <div className="row add-staff">
                    <Button type="submit" value="submit" color="primary" onClick={this.toggleForm}><strong>+</strong></Button>
                    <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
                        <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody className="col-12 col-md-12">
                            <LocalForm onSubmit={this.handleSubmit}>
                                <Row className="form-group">
                                    <Label htmlFor="name" className="col-md-3">Tên</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".name" name="name" placeholder="Tên nhân viên"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(30)
                                            }}
                                        >
                                        </Control.text>
                                        <Errors className="text-danger" model=".name" show="touched"
                                            messages={{
                                                required: 'Yêu cầu nhập',
                                                maxLength: ' Yêu cầu nhập ít hơn 30 ký tự',
                                                minLength: ' Yêu cầu nhập nhiều hơn 2 ký tự'
                                            }}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".doB" name="doB" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.handleChange}
                                            validators={{
                                                required
                                            }}
                                        >
                                        </Control>
                                        <Errors className="text-danger" model=".doB" show="touched"
                                            messages={{
                                                required: 'Yêu cầu nhập'
                                            }}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".startDate" name="startDate" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.handleChange}
                                            validators={{
                                                required
                                            }}
                                        >
                                        </Control>
                                        <Errors className="text-danger" model=".startDate" show="touched"
                                            messages={{
                                                required: 'Yêu cầu nhập'
                                            }}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="departmentId" className="col-md-3">Phòng ban</Label>
                                    <Col className="col-md-8">
                                        <Control.select model=".departmentId" name="departmentId" className="form-control"
                                            defaultValue={this.state.newStaff.departmentId}
                                            onChange={this.handleChange}
                                        >
                                            <option>Sale</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>Finance</option>
                                            <option>IT</option>
                                        </Control.select>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="salaryScale" className="col-md-3">Hệ số lương</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".salaryScale" name="salaryScale" className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.newStaff.salaryScale}
                                            placeholder="1.0 → 3.0"
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".annualLeave" name="annualLeave" className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.newStaff.annualLeave}
                                            placeholder="1.0"
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".overTime" name="overTime" className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.newStaff.overTime}
                                            placeholder="0.0"
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Col className="col-5">
                                        <Button type="submit" value="submit" color="primary" >Thêm</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default AddNewStaff;
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";


class EditStaff extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFormOpen: false,
            selectedStaff: {
                id: this.props.staff.id,
                name: this.props.staff.name,
                doB: this.props.staff.doB,
                salaryScale: this.props.staff.salaryScale,
                startDate: this.props.staff.startDate,
                departmentId: this.props.staff.departmentId,
                annualLeave: this.props.staff.annualLeave,
                overTime: this.props.staff.overTime,
            },
            touched: {
                name: false,
                doB: false,
                startDate: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({ isFormOpen: !this.state.isFormOpen })
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = name === 'departmentId' ? this.props.departments.filter(dept => dept.name.includes(target.value))[0].id : target.value;

        this.setState({
            selectedStaff: {
                ...this.state.selectedStaff,
                [name]: value,
                image: '/assets/images/alberto.png'
            }
        });
    }

    handleSubmit() {
        const editedStaff = this.state.selectedStaff;
        const id = editedStaff.id
        this.props.updateStaff(editedStaff, id);
        this.toggleForm();
    }

    render() {

        return (
            <div className="container">
                <div className="row add-staff">
                    <Button type="submit" value="submit" color="primary" onClick={this.toggleForm}>Sửa</Button>
                    <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
                        <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody className="col-12 col-md-12">
                            <LocalForm onSubmit={this.handleSubmit}>
                                <Row className="form-group">
                                    <Label htmlFor="name" className="col-md-3">Tên</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".name" name="name" placeholder="Tên nhân viên"
                                            className="form-control"
                                            value={this.state.selectedStaff.name}
                                            onChange={this.handleChange}
                                        >
                                        </Control.text>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".doB" name="doB" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.handleChange}
                                        >
                                        </Control>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".startDate" name="startDate" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.handleChange}
                                        >
                                        </Control>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="departmentId" className="col-md-3">Phòng ban</Label>
                                    <Col className="col-md-8">
                                        <Control.select model=".departmentId" name="departmentId" className="form-control"
                                            defaultValue={this.state.selectedStaff.departmentId}
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
                                            value={this.state.selectedStaff.salaryScale}
                                            placeholder="1.0 → 3.0"
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".annualLeave" name="annualLeave" className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.selectedStaff.annualLeave}
                                            placeholder="1.0"
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".overTime" name="overTime" className="form-control"
                                            onChange={this.handleChange}
                                            value={this.state.selectedStaff.overTime}
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

export default EditStaff;
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors, Field } from "react-redux-form";
import { connect } from "react-redux";
import { addStaff } from "../Actions/search";

const mapStateToProps = state => {
    return {
        departments: state.departments,
        staffs: state.staffs,
    }
}

function AddStaff(props) {
    let newStaffs = JSON.parse(localStorage.getItem('newStaffs'));

    const [formOpen, setFormOpen] = useState(false);
    const [newStaff, setNewStaff] = useState({});    

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }

    const nextStaffId = (staff) => {
        const nextStaffId = newStaffs? newStaffs.length : staff.length;
        return nextStaffId;
    }

    const handleChange = (e) => {
        let department = props.departments;
        let target = e.target;
        let name = target.name;
        let value = name === 'department' ? department.filter(dept => dept.name === target.value)[0] : target.value;
        console.log(value);
        setNewStaff({ ...newStaff, id: nextStaffId(props.staffs), [name]: value, image: '/assets/images/dustin.jpeg' });
    }

    const handleSubmit = () => {
        toggleForm();
        props.addStaff(newStaff);
        newStaffs? localStorage.setItem('newStaffs', JSON.stringify([...newStaffs, newStaff])) : localStorage.setItem('newStaffs', JSON.stringify([...props.staffs, newStaff]));
    }

    return (
        <div className="container">
            <div className="row add-staff">
                <Button type="submit" value="submit" color="primary" onClick={toggleForm}><strong>+</strong></Button>
                <Modal isOpen={formOpen} toggle={toggleForm} >
                    <ModalHeader toggle={toggleForm}>Thêm Nhân Viên</ModalHeader>
                    <ModalBody className="col-12 col-md-12">
                        <LocalForm onSubmit={handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="name" className="col-md-3">Tên</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".name" name="name" placeholder="Tên nhân viên"
                                        className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
                                <Col className="col-md-8">
                                    <Control type="date" model=".doB" name="doB" className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                <Col className="col-md-8">
                                    <Control type="date" model=".startDate" name="startDate" className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" className="col-md-3">Phòng ban</Label>
                                <Col className="col-md-8">
                                    <Control.select model=".department" name="department" className="form-control"
                                        onChange={e => handleChange(e)}
                                    >
                                        <option value=""></option>
                                        <option value="Sale">Sale</option>
                                        <option value="HR">HR</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Finance">Finance</option>
                                        <option value="IT">IT</option>
                                    </Control.select>
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" className="col-md-3">Hệ số lương</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".salaryScale" name="salaryScale" className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".annualLeave" name="annualLeave" className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".overTime" name="overTime" className="form-control"
                                        onChange={e => handleChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Col className="col-5">
                                    <Button type="submit" value="submit" color="primary">Thêm</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, { addStaff })(AddStaff);
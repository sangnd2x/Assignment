import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Col, Label, Form, FormGroup, Input, FormFeedback } from "reactstrap";
import { connect } from "react-redux";
import { addStaff } from "../Actions/search";

let newStaffs = JSON.parse(localStorage.getItem('newStaffs'));

class AddStaff extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFormOpen: false,
            newStaff: {
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: {},
                annualLeave: '',
                overTime: '',
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
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleForm() {
        this.setState({ isFormOpen: !this.state.isFormOpen })
    }

    nextStaffId(staff) {
        const nextStaffId = newStaffs ? newStaffs.length : staff.length;
        return nextStaffId;
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = name === 'department' ? this.props.departments.filter(dept => dept.name === target.value)[0] : target.value;

        this.setState({
            newStaff: {
                ...this.state.newStaff,
                id: this.nextStaffId(this.props.staffs),
                [name]: value,
                image: '/assets/images/dustin.jpeg'
            }
        });
        console.log(this.state.newStaff);
        console.log(this.state.touched);
    }

    handleSubmit(e) {
        this.toggleForm();
        const newStaff = this.state.newStaff;
        console.log(newStaff);
        newStaffs ? localStorage.setItem('newStaffs', JSON.stringify([...newStaffs, newStaff])) : localStorage.setItem('newStaffs', JSON.stringify([...this.props.staffs, newStaff]));
        e.preventDefault();
    }

    handleBlur = field => e => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        };

        if (this.state.touched.name && name.length === 0)
            errors.name = 'Yêu cầu nhập';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Yêu cầu ít hơn 30 ký tự';
        else if (this.state.touched.name && name.length < 5)
            errors.name = 'Yêu cầu nhiều hơn 5 ký tự';

        if (this.state.touched.doB)
            errors.doB = 'Yêu cầu nhập';

        if (this.state.touched.startDate)
            errors.startDate = 'Yêu cầu nhập';
            
            
        return errors;
    }

    render() {
        const errors = this.validate(this.state.newStaff.name, this.state.newStaff.doB, this.state.newStaff.startDate)

        return (
            <div className="container">
                <div className="row add-staff">
                    <Button type="submit" value="submit" color="primary" onClick={this.toggleForm}><strong>+</strong></Button>
                    <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
                        <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody className="col-12 col-md-12">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="name" className="col-md-3">Tên</Label>
                                    <Col className="col-md-8">
                                        <Input type="text" id ="name" name="name" placeholder="Tên nhân viên"
                                            value={this.state.newStaff.name}
                                            valid={errors.name === ''}
                                            invalid={errors.name !== ''}
                                            onBlur={this.handleBlur('name')}
                                            className="form-control"
                                            onChange={this.handleChange}
                                        />
                                        <FormFeedback>
                                            {errors.name}
                                        </FormFeedback>
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
                                    <Col className="col-md-8">
                                        <Input type="date" id="doB" name="doB" className="form-control"
                                            value={this.state.tenState}
                                            valid={errors.doB === ''}
                                            invalid={errors.doB !== ''}
                                            onBlur={this.handleBlur('doB')}
                                            onChange={this.handleChange}
                                        />
                                        <FormFeedback>
                                            {errors.doB}
                                        </FormFeedback>
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                    <Col className="col-md-8">
                                        <Input type="date" id="startDate" name="startDate" className="form-control"
                                            value={this.state.tenState}
                                            valid={errors.startDate === ''}
                                            invalid={errors.startDate !== ''}
                                            onBlur={this.handleBlur('startDate')}
                                            onChange={this.handleChange}
                                        />
                                        <FormFeedback>
                                            {errors.startDate}
                                        </FormFeedback>
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="department" className="col-md-3">Phòng ban</Label>
                                    <Col className="col-md-8">
                                        <Input type="select" id="department" name="department" className="form-control"
                                            defaultValue="Sale"
                                            onChange={this.handleChange}
                                        >
                                            <option>Sale</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>Finance</option>
                                            <option>IT</option>
                                        </Input>
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="salaryScale" className="col-md-3">Hệ số lương</Label>
                                    <Col className="col-md-8">
                                        <Input type="text" id ="salaryScale" name="salaryScale" className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                    <Col className="col-md-8">
                                        <Input type="text" id="annualLeave" name="annualLeave" className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                    <Col className="col-md-8">
                                        <Input type="text" id="overTime" name="overTime" className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </Col>  
                                </FormGroup>
                                <FormGroup row>
                                    <Col className="col-5">
                                        <Button type="submit" value="submit" color="primary">Thêm</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default AddStaff;
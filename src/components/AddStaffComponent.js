import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";
import { addStaff } from "../Actions/search";

function AddStaff(props) {
    const [formOpen, setFormOpen] = useState(false);
    const [newStaff, setNewStaff] = useState({});

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }

    const nextStaffId = (staff) => {
        const nextStaffId = staff.length;
        return nextStaffId;
    }

    const onChange = (e) => {
        const department = props.departments;
        let target = e.target;
        let name = target.name;
        let value = target.name === 'department' ? department.filter(dept => dept.name === target.value)[0] : target.value;
        setNewStaff({ ...newStaff, [name]: value, id: nextStaffId(props.staffs), image: '/assets/images/dustin.jpeg' });
    }

    const handleSubmit = () => {
        toggleForm();
        props.addStaff(newStaff);
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
                                        onChange={e => onChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
                                <Col className="col-md-8">
                                    <Control type="date" model=".doB" name="doB" className="form-control"
                                        
                                        onChange={e => onChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                <Col className="col-md-8">
                                    <Control type="date" model=".startDate" name="startDate" className="form-control"
                                        
                                        onChange={e => onChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" className="col-md-3">Phòng ban</Label>
                                <Col className="col-md-8">
                                    <Control.select model=".department" name="department" className="form-control"
                                        onChange={e => onChange(e)}
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
                                        onChange={e => onChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".annualLeave" name="annualLeave" className="form-control"
                                        onChange={e => onChange(e)}
                                    />
                                </Col>  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                <Col className="col-md-8">
                                    <Control.text model=".overTime" name="overTime" className="form-control"
                                        onChange={e => onChange(e)}
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

// class AddStaff extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             isFormOpen: false,
//             newStaff: {}
//         };

//         this.onChange = this.onChange.bind(this);
//         this.nextStaffId = this.nextStaffId.bind(this);
//         this.toggleForm = this.toggleForm.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     toggleForm() {
//         this.setState({ isFormOpen: !this.state.isFormOpen})
//     }

//     nextStaffId(staff) {
//         const nextStaffId = staff.length;
//         return nextStaffId;
//     }

//     onChange(e) {
//         const department = this.props.departments;
//         let target = e.target;
//         let name = target.name;
//         let value = target.name === 'department' ? department.filter(dept => dept.name === target.value)[0] : target.value;
//         this.setState({
//             newStaff: { ...this.state.newStaff, [name]: value, id: this.nextStaffId(this.props.staffs), image:'/assets/images/dustin.jpeg' }
//         });
//     }

//     handleSubmit() {
//         this.toggleForm();
//         const newStaff = this.state.newStaff;
//         console.log(newStaff)
//         this.props.addStaff(newStaff);
 
//         // localStorage.setItem('Staffs', JSON.stringify());
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="row add-staff">
//                     <Button type="submit" value="submit" color="primary" onClick={this.toggleForm}><strong>+</strong></Button>
//                     <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
//                         <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
//                         <ModalBody className="col-12 col-md-12">
//                             <LocalForm onSubmit={this.handleSubmit}>
//                                 <Row className="form-group">
//                                     <Label htmlFor="name" className="col-md-3">Tên</Label>
//                                     <Col className="col-md-8">
//                                         <Control.text model=".name" name="name" placeholder="Tên nhân viên"
//                                             className="form-control"
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="doB" className="col-md-3">Ngày sinh</Label>
//                                     <Col className="col-md-8">
//                                         <Control type="date" model=".doB" name="doB" className="form-control"
//                                             value={this.state.tenState}
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
//                                     <Col className="col-md-8">
//                                         <Control type="date" model=".startDate" name="startDate" className="form-control"
//                                             value={this.state.tenState}
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="department" className="col-md-3">Phòng ban</Label>
//                                     <Col className="col-md-8">
//                                         <Control.select model=".department" name="department" className="form-control"
//                                             onChange={e => this.onChange(e)}
//                                         >
//                                             {/* {this.props.departments.map(dept => <option key={dept.id} value={dept.name}>{dept.name}</option>)} */}
//                                             <option>Sale</option>
//                                             <option>HR</option>
//                                             <option>Marketing</option>
//                                             <option>Finance</option>
//                                             <option>IT</option>
//                                         </Control.select>
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="salaryScale" className="col-md-3">Hệ số lương</Label>
//                                     <Col className="col-md-8">
//                                         <Control.text model=".salaryScale" name="salaryScale" className="form-control"
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
//                                     <Col className="col-md-8">
//                                         <Control.text model=".annualLeave" name="annualLeave" className="form-control"
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
//                                     <Col className="col-md-8">
//                                         <Control.text model=".overTime" name="overTime" className="form-control"
//                                             onChange={e => this.onChange(e)}
//                                         />
//                                     </Col>  
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Col className="col-5">
//                                         <Button type="submit" value="submit" color="primary">Thêm</Button>
//                                     </Col>
//                                 </Row>
//                             </LocalForm>
//                         </ModalBody>
//                     </Modal>
//                 </div>
//             </div>
//         );
//     }
// }

const mapStateToProps = state => ({
    staffs: state.staffs,
    departments: state.departments
});

export default connect(mapStateToProps, { addStaff })(AddStaff);
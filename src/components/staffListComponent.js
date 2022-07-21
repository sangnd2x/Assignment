import React, {Component} from "react";
import { CardBody, CardImg, Breadcrumb, BreadcrumbItem, CardText, Form, Input, Button, FormGroup} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import AddNewStaff from "./AddNewStaffComponent";

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            staffs: this.props.staffs
        }
        this.onChange = this.onChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    onChange() {
        this.setState({
            query: this.name.value
        });
    }

    handleSearch(e) {
        e.preventDefault();
        console.log(this.props.staffs);
        const foundStaff = this.props.staffs.filter(staff => staff.name.toLowerCase().includes(this.state.query));
        this.setState({
            staffs: foundStaff
        });  
    }

    render() {
        const staff = this.state.staffs.map(staff => {
            return (
                <div key={staff.id} className={"col-12" + " " + "col-md-" + (12/this.props.column) + " " + "col-lg-" + (12/this.props.column)}>
                    <div>
                        <Link to={`/staffs/${staff.id}`} style={{ textDecoration: "none", color: "#000000", paddingTop: "10px" }}>
                            <CardBody className="staff">
                                <CardImg width="220" height="220" src={staff.image} alt={staff.name} />
                                <CardText><span>{staff.name}</span></CardText>
                            </CardBody>
                        </Link>
                    </div>
                </div>
            )
        });
        
        if (this.props.staffsLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.staffsError) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.staffsError}</h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    
                    <div className="row">
                        <div className="col-3">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/staffs" >Trang chủ</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        
                        <div>
                            <Form onSubmit={(e) => this.handleSearch(e)}>
                                <FormGroup className="search-bar">
                                    <Input type="text" placeholder="Nhập tên nhân viên...."
                                        innerRef={input => this.name = input}
                                        onChange={e => this.onChange(e)}
                                    />
                                    <Button type="submit" color="primary">Tìm</Button>
                                </FormGroup>  
                            </Form>
                        </div>
                        <div>
                            <AddNewStaff
                                staffs={this.props.staffs}
                                postStaff={this.props.postStaff}
                                touched={this.props.touched}
                                departments={this.props.departments}
                            />
                        </div>
                        <div className="col-12">
                            <h3>Nhân Viên</h3>
                        </div>
                    </div>
                    
                    <div className="row">
                        {staff}
                    </div>
                </div>
            );
        }
    }
}

export default StaffList;
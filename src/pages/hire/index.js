import React from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
function HireMe() {
    return (
        <div className="container mt-2">
            <h4 className="text-center mt-2">Hire Me</h4>
            <div className="text-end">
                <Button variant="secondary"> <NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink></Button>
            </div>
            <div className="d-flex justify-content-between aligh-items-center mt-5">
                

                <Card style={{ width: '22rem',height:'18rem' }} className="mb-3">
                    <Card.Img variant="top" src="logo512.png"  style={{ width: '100px',textAlign:"center" ,margin:"auto"} } className="mt-2"/>
                    <Card.Body className="text-center">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                        .
                        </Card.Text>
                        <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
                    </Card.Body>
                </Card>

               

               
            </div>

        </div>
    )

}
export default HireMe
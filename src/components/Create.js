import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
 
function Create() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [designation, setdesignation] = useState("");

    let history = useNavigate();
    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault(); 
 
        const ids = uuid(); 
        let uni = ids.slice(0, 8); 

        let a = name,
            b = age;
        if (name === "" || age === "") {
            alert("Please enter valid Input");
            return;
        }
        array.push({ id: uni, Name: a, Age: b,Designation:designation});
        // goto home page
         history("/");
    };
 
    return (
        <div>
            <Form
                style={{ margin: "5rem" }}
            >
                <Form.Group
                >
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
                <Form.Group
                >
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>
                <Form.Group
                >
                    <Form.Control
                        onChange={(e) =>
                            setdesignation(e.target.value)
                        }
                        type="text"
                        placeholder="Designation"
                        required
                    />
                </Form.Group>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Button
                    onClick={(e) => handelSubmit(e)}
                    type="submit"
                >
                    Submit
                </Button>
                 <Link to="/">
                    <Button>
                        Home
                    </Button>
                </Link>
                    </div>
            </Form>
        </div>
    );
}
 
export default Create;
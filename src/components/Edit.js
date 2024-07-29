import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 
function Edit() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [id, setid] = useState("");
    const [designation, setdesignation] = useState("");
    let history = useNavigate();
    let index = array
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);
    const handelSubmit = (e) => {
        e.preventDefault();
        if (name === "" || age === "" || designation=== "") {
            alert("invalid input");
            return;
        }
        let a = array[index];
        a.Name = name;
        a.Age = age;
        a.Designation =designation
        history("/");
    };

    useEffect(() => {
        setname(localStorage.getItem("Name"));
        setage(localStorage.getItem("Age"));
        setid(localStorage.getItem("id"));
        setdesignation(localStorage.getItem("Designation"));

    }, []);
 
    return (
        <div>
            <Form
                style={{ margin: "5rem" }}
            >
                <Form.Group
                >
                    <Form.Control
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
 
                <Form.Group
                >
                    <Form.Control
                        value={age}
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>
                <Form.Group
                >
                    <Form.Control
                        value={designation}
                        onChange={(e) =>
                            setdesignation(e.target.value)
                        }
                        type="text"
                        placeholder="Designation"
                    />
                </Form.Group>
                

                <Button
                    onClick={(e) => handelSubmit(e)}
                >
                    Update
                </Button>
 
                <Link to="/">
                    <Button >
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Edit;
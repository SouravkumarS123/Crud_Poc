import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
 
function Home() {
    let history = useNavigate();
    function setID(id, name, age,des) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Designation", des);
    }
    function deleted(id) {
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);
        array.splice(index, 1);
        history("/");
    }
 
    return (
        <div>
            <Table bordered size="sm">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Age</th>
                        <th>Employee Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Designation}</td>
                                <td>
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={(e) =>
                                                setID(
                                                    item.id,
                                                    item.Name,
                                                    item.Age,
                                                    item.Designation
                                                )
                                            }
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button
                                        onClick={(e) =>
                                            deleted(item.id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Link to="/create">
                <Button >
                    Create
                </Button>
            </Link>
        </div>
    );
}
 
export default Home;
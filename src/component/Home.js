
import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getInfo,dltData } from "./Slice";


export default function Home() {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.add.value);
    return (
        <div>
            <div>
                <h3>Crud application using React-Redux</h3>
                <Link to="/Add"> <Button variant="outline-secondary" size="sm">Add Employee</Button></Link>
            </div>
            <div>
                <h1>Working Employee Data</h1>
                {show.map((s, i) => {
                    return (
                        <div key={i}>
                            <div>ID: {s.Id}
                            </div>
                            <div>
                                Name:  {s.Name}

                            </div>
                            <div>
                                Registration No: {s.RegdNo}
                            </div>
                            <>
                                Email: {s.Email}
                            </> <br />
                            <Link to={`/Update/${s.Id}`} > <Button variant="outline-info" size="sm" onClick={(e)=>{
                                dispatch(getInfo(i))
                            }}> Update Data </Button> </Link>
                            <Button variant="outline-warning" size="sm" onClick={()=>{
                                dispatch(dltData(i))
                            }}> Delete Data </Button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
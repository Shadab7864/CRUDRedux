import React from 'react'
import {Link} from "react-router-dom"
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch as dispatch } from "react-redux"

function Info() {
    const view = useSelector((state) => state.add.value);
    return (
        <div>
            <div>
                <h1>Working Employees</h1>
            </div>
            <div>
                {view.map((s, i) => {
                    return (
                        <div>
                            <div>
                                ID:{s.id}<br/>Name:{s.Name}<br/>Email:{s.Email}<br/>Registration No:{s.RegdNo}
                            </div>
                            <div>
                            <Link to="/Update"> <Button variant="outline-info" size="sm" > Update Data </Button> </Link>
                            <Button variant="outline-warning" size="sm"> Delete Data </Button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Info

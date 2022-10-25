import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { TextField } from "@mui/material"
import { Button } from "react-bootstrap"
import { updtEmployee } from './Slice'
import { Link, useParams } from 'react-router-dom'
import { Input } from 'antd'

function Update() {
  const dispatch=useDispatch()
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [regdNo, setRegdNo] = useState("")
  console.log(id)
  console.log(name)
  const show = useSelector((state) => state.add.value)
  const param = useParams()
  const user = show.filter((show) => show.Id === param.Id)
  // console.log(user)

  const { Id, Name, Email, RegdNo } = user[0];


  // alert(ild);
  return (
    <div>
      <h1>Enter Details to be updated </h1>
      <div>
        <Input id="outlined-basic" variant="outlined" label="ID" size="small" placeholder={Id} onChange={(e) => { setId(e.target.value) }} />
        <Input id="outlined-basic" variant="outlined" label="Enter Name" size="small" placeholder={Name} onChange={(e) => { setName(e.target.value) }} />
        <Input id="outlined-basic" variant="outlined" label="Enter Email" size="small" placeholder={Email} onChange={(e) => { setEmail(e.target.value) }} />
        <Input id="outlined-basic" variant="outlined" label="Enter Registration No " placeholder={RegdNo} size="small" onChange={(e) => { setRegdNo(e.target.value) }} /><br />
        <Link to="/"> <Button variant="outline-info" onClick={()=>{
        dispatch(updtEmployee({Id:param.Id,Name:name,Email:email,RegdNo:regdNo}))
      }}>Update Details</Button></Link><br /><br />



        {/* {show.map((s, i) => {
          return (
            <div key={i} >
              
                <TextField id="outlined-basic" variant="outlined" label="Enter ID" size="small" value={Id} onChange={(e) => { setId(e.target.value) }} />
                <TextField id="outlined-basic" variant="outlined" label="Enter Name" size="small" value={name} onChange={(e) => { setName(e.target.value) }} />
                <TextField id="outlined-basic" variant="outlined" label="Enter Email" size="small" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField id="outlined-basic" variant="outlined" label="Enter Registration No " value={regdNo} size="small" onChange={(e) => { setRegdNo(e.target.value) }} /><br />
                <Link to="/"> <Button variant="outline-info" onClick={() => {
                  dispatch(updtEmployee({ id, Name, Email, RegdNo }))
                }}>Update Details</Button></Link><br /><br />

            </div>
      )

        })} */}
      </div>
    </div >
  )
}

export default Update

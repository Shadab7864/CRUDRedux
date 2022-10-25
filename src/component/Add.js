import userEvent from '@testing-library/user-event'
import React ,{ useState } from 'react'
import { Form, FormLabel, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { addEmployee } from './Slice'
// import Home from "./Home"

function Add() {
  const dispatch = useDispatch()
  const [Id,setId]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [regd,setRegd]=useState("");
  return (
    <div>
      <h4>Fill all the mandatory fields to add employee data</h4>
      <FormLabel>ID</FormLabel><br />
      <input type="text" placeholder="ID No" onChange={(e)=>{
        setId(e.target.value)
      }}></input> 
        <br />
      <FormLabel>Name</FormLabel><br />
      <input type="text" placeholder="Your Name" onChange={(e)=>{
        setName(e.target.value)
      }} ></input>   <br />
      <FormLabel>Email</FormLabel><br />
      <input type="email" placeholder="name@abc.com" onChange={(e)=>{
        setEmail(e.target.value)
      }}></input>    <br />
      <FormLabel>Registration No</FormLabel><br />
      <input type="text" placeholder="Regd No" onChange={(e)=>{
        setRegd(e.target.value)
      }} ></input><br /><br />
      <Link to="/"> <Button variant="outline-primary" size="sm" onClick={()=>{
        dispatch(addEmployee({Id,Name:name,Email:email,RegdNo:regd}))
      }} >Add Data</Button> </Link>
    </div >
  )
}

export default Add

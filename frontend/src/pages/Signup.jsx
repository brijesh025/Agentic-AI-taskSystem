import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
function Signup() {
  const [form, setForm]=useState({email: "", password: ""})
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();
  
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
  }
  const handleSignup = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try{
      fetch()
    }catch(error){

    }
  }
  return (
    <div>Signup</div>
  )
}

export default Signup
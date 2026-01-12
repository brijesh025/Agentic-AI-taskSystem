import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [form, setForm] = useState({eamil:"", password:""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange= (e)=>{
    setForm(...form, {[e.target.name]:e.target.value})
  }
  const handleLogin = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
        {
          method: 'GET',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify(form)
        }         
      )

      const data = await res.json();

      if(res.ok){
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      }
      else {
        alert(data.message || "Sign in failed");
      }
    }catch(e){
      alert("Something went wrong: ", error);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-base-200'>
      <form>

      </form>

    </div>
  )
}

export default Login
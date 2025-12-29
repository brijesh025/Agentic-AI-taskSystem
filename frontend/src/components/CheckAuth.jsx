import React, { useEffect, useState } from 'react'
import useNavigate from 'react-router-dom';
const CheckAuth = ({children, protectedRoute}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const token =localStorage.getItem("token");
    if(protectedRoute){
      if(!token){
        navigate("/login");
      }else{
        setLoading(false);
      }
    }else {
      if(token){
        navigate("/");
      }else {
        setLoading(false);
      }
    }
  })
  return (
    <div>CheckAuth</div>
  )
}

export default CheckAuth
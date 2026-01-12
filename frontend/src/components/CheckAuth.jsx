import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckAuth = ({ children, isProtected }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isProtected) {
      if (!token) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  });
  return (
    <div>
      {loading ? (<div>loading...</div>):children}
    </div>
  )
};

export default CheckAuth;

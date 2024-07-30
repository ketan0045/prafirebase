import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentcont) => --currentcont);
    }, 1000);

    count === 0 && navigate("/login");
    return () => {
      clearInterval(interval);
      
    };
  }, [count, navigate]);

  return (
    <div>
      <p>Redirect you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;

// import React from "react";
// import { Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import LoadingToRedirect from "./LoadingToRedirect";

// const UserRoute = ({ children, ...rest }) => {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Route {...rest} /> : <LoadingToRedirect />;
// };

// export default UserRoute;

// import React from "react";
// import { Route,Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";
// import LoadingToRedirect from "./LoadingToRedirect";

// const UserRoute = ({ children, ...rest }) => {

//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ?  <Outlet to="/"/>  : <LoadingToRedirect />;
// };

// export default UserRoute;

// // https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
// // https://flutter-developer.medium.com/solved-privateroute-is-not-a-route-component-777e78e3205b
// // https://www.youtube.com/watch?v=2k8NleFjG7I&t=535s

// VideoColorSpace The New Way To Create Protected Routes With React Router V6 https://www.youtube.com/watch?v=2k8NleFjG7I&t=526s
// ckeck or contidion

import React from "react";
import { Route, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({}) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <LoadingToRedirect />;
};

export default UserRoute;

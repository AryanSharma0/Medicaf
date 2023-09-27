import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import RequiredAuth from "./Component/RequiredAuth";
import NoDataFound from "./Pages/NoDataFound";
import Loader from "./Component/Loader";
function RouteControl() {
  const authenticate = useSelector((state) => state.authReducer.authenticate);
  console.log(authenticate);
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (
      (location.pathname === "/auth/login" ||
        location.pathname === "/auth/signup") &&
      authenticate
    ) {
      navigate("/");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticate]);
  let route;
  if (!authenticate) {
    route = (
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route
          path="*"
          element={
            <RequiredAuth>
              <NoDataFound />
            </RequiredAuth>
          }
        ></Route>{" "}
      </Routes>
    );
  }
  if (authenticate) {
    route = (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<NoDataFound />}></Route>
      </Routes>
    );
  }

  return <Suspense fallback={Loader}>{route}</Suspense>;
}

export default RouteControl;

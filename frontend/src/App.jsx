import React from "react";
import {RouterProvider,createBrowserRouter}  from 'react-router-dom';
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Root from "./components/Root";

// function App() {
//   const logout = () => {
//     AuthService.logout();
//   };

const router = createBrowserRouter([
  {path : "/", element: <Root />,
    children:[
      {path : "/", element: <Index />},
      {path : "/signup", element: <SignUp />},
      {path : "/signin", element: <SignIn />},
      {path : "/profile", element: <Profile/>},
      
    ]
  }
])

const App=()=>{
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App;

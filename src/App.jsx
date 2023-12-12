import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import SignUpFormTwo from './components/Register/SignUpFormTwo';
import SignUpFormThree from './components/Register/SignUpFormThree';
import SignUpFormFour from './components/Register/SignUpFormFour';
import { useState } from "react";

function App() {
  const [currentForm,setCurrentForm] = useState("login");
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
  
  const routes = createBrowserRouter([
    {path:"/",element:<Welcome/>},
    {path:"/layout",
    element:(
    <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
    ) 
    , children:[
      {index:true,element:<Home />}
    ]},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Register />},
    {path:"/signupTwo",element:<SignUpFormTwo />},
    {path:"/signupThree",element:<SignUpFormThree/>},
    {path:"/signupFour",element:<SignUpFormFour/>},

    
  ])
  return <>
    <RouterProvider router={routes} />
  </>
}

export default App;

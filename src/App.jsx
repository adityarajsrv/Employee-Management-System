/* eslint-disable no-unused-vars */
// import { useEffect } from 'react';
import { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import Employee from "./components/Dashboard/EmployeeDashboard";
import Admin from "./components/Dashboard/AdminDashboard";
import { AuthContext } from './context/AuthProvider';

const App = ()=>{
  const[user, setUser] = useState(null)
  // const authData = useContext(AuthContext)
  const[loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)


  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser({role: userData.role})
      setLoggedInUserData(userData.data || null)  
    }
  },[]);

  const handleLogin = (email, password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser({role:'employee'})
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data:employee}))
      }
    }else{
      alert("Invalid Credentials")
    }  
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <Admin changeUser={setUser} />
      ) : user.role === 'employee' ? (
        <Employee changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
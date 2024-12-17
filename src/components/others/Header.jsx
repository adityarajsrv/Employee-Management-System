/* eslint-disable react/prop-types */
// import { useState } from "react";

const Header = (props)=>{
    // const[username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstName)
    // }

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload();
    }

    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-semibold">Hello <br /> <span className="text-3xl">username 👋</span></h1> 
            <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
        </div>
    )
}

export default Header;
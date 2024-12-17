/* eslint-disable react/prop-types */
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header"

const Admin = (props) => {
    return(
        <div className="h-screen w-full p-10">
            <Header changeUser={props.changeUser}/>
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default Admin;
/* eslint-disable react/prop-types */
import Header from "../others/Header"
import TaskList from "../TaskList/TaskList"
import TaskListNumber from "../others/TaskListNumber"

const Employee = (props) => {
    return(
        <div className="p-10 bg-[#1C1C1C]">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumber changeUser={props.changeUser} data={props.data}/>
            <TaskList changeUser={props.changeUser} data={props.data}/>
        </div>    
    )
}

export default Employee
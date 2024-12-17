/* eslint-disable react/prop-types */

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";


const TaskList = ({data}) => {
    console.log(data)
    return (
        <div id='tasklist' className="h-[55%] w-full py-5 overflow-x-auto mt-10 flex items-center justify-start gap-5 flex-nowrap">
            {data.tasks.map((elem, idx)=>{
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }
                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
                }
                if(elem.completedTask){
                    return <CompleteTask key={idx} data={elem}/>
                }
                if(elem.failedTask){
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
        </div>
    );
};

export default TaskList;

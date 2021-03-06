import { FaTimes } from "react-icons/fa";
function Task({task,ondelete,ontoggle}) {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>ontoggle(task.id)}>
            <h2>
               {task.text} <FaTimes onClick={()=>ondelete(task.id)} style={{color:"red",cursor:'pointer'}}/>
            </h2>
            <p>{task.day}</p>
            
        </div> 
    )
}

export default Task

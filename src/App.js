import { useState } from "react";
import Header from "./components/header";
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] =useState([
        {
            id:1,
            text:'doctor appointent',
            day:'Feb 12th 12:30',
            reminder:false,
        },
        {
            id:2,
            text:'business meet',
            day:'Feb 12th 1:30',
            reminder:false,
        },
        {
            id:3,
            text:'walking',
            day:'Feb 12th 4:30',
            reminder:false,
        },
    ])
    const ondelete=(id)=>{
          setTasks(tasks.filter((task)=> task.id !== id))     
    }
    const togglereminder=(id)=>{
           setTasks(tasks.map(task=> task.id === id ? {...task ,reminder:!task.reminder} :task))
    }
  return(
    <div className="container">
      {/*this is with props pasing to components*/}
      {/*<Header  title="cool" name="this is a name" style={{color:"blue"}} />*/}
       {/*comment in reactJavascript By QuackAttack69 on Apr 4 2020 Donate*/}
       <Header style={{color:"blue"}} />
       {tasks.length > 0 ?<Tasks tasks={tasks} ondelete={ondelete} ontoggle={togglereminder}/>:'no tasks to show'}
    </div>
  ) 
}
export default App
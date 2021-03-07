import { useState } from "react";
import Header from "./components/header";
import Tasks from './components/Tasks'
import Addtasks from './components/Addtasks'
function App() {
  const [showAddtask, setshowAddtask] = useState(false)
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
    const addtask=(task)=>{
      const id=Math.floor(Math.random()*1000)+1
        const newtask={id,...task}
        console.log(newtask)
        setTasks([...tasks,newtask])
    }
    const ondelete=(id)=>{
          setTasks(tasks.filter((task)=> task.id !== id))     
    }
    const togglereminder=(id)=>{
           setTasks(tasks.map(task=> task.id === id ? {...task ,reminder:!task.reminder} :task))
    }
    const pressaddbutton=()=>{
      setshowAddtask(!showAddtask)
    }
  return(
    <div className="container">
      {/*this is with props pasing to components*/}
      {/*<Header  title="cool" name="this is a name" style={{color:"blue"}} />*/}
       {/*comment in reactJavascript By QuackAttack69 on Apr 4 2020 Donate*/}
       
       <Header style={{color:"blue"}} addtask={pressaddbutton} presentstate={showAddtask} />
       {showAddtask && <Addtasks addingtask={addtask} />}
       {tasks.length > 0 ?<Tasks tasks={tasks} ondelete={ondelete} ontoggle={togglereminder}/>:'no tasks to show'}
    </div>
  ) 
}
export default App
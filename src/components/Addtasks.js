import {useState} from 'react'
function Addtasks({addingtask}) {
    const [text, settext] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setreminder] = useState(false)
    const sumit =(e)=>{
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return
        }
        addingtask({text,day,reminder})
        settext('')
        setDay('')
        setreminder(false)
    }
    return (
        <form className="add-form" onSubmit={sumit}>
            <div className="form-control">
               <label > Task </label>
               <input type="text" placeholder='Add task' value={text} onChange={(e)=>settext(e.target.value)}/>
            </div>
            
            <div className="form-control">
               <label > Date </label>
               <input type="datetime-local" placeholder='Add date' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            
            <div className="form-control form-control-check">
               <label > Reminder </label>
               <input type="checkbox" checked={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" className="btn btn-block" value="SUBMIT" />
        </form>
    )
}
export default Addtasks

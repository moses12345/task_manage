import React from 'react'

function Addtasks() {
    return (
        <form className="add-form">
            <div className="form-control">
               <label > Task </label>
               <input type="text" placeholder='Add task'/>
            </div>
            
            <div className="form-control">
               <label > Date </label>
               <input type="date" placeholder='Add date'/>
            </div>
            
            <div className="form-control">
               <label > Reminder </label>
               <input type="checkbox" placeholder='Add task'/>
            </div>

        </form>
    )
}

export default Addtasks

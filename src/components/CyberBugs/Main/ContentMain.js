import React from 'react'

export default function ContentMain(props) {
   
    let {lstTask} = props.projectDetail; 
    console.log(lstTask);
   const renderListTask = () => {
   return  lstTask?.map((item, index) => {
       return <div className="card" key = {index} style={{ width: '17rem', height: '25rem' }}>
       <div className="card-header">
         {item.statusName}
</div>
       <ul className="list-group list-group-flush">
       {item.lstTaskDeTail?.map((task, index) => {
           return <li key = {index} className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
               <p className="font-weight-bold"> {task.taskName} </p>
               <div className="block" style={{ display: 'flex' }}>
                   <div className="block-left">
                       <p className="text-danger">{task.priorityTask.priority}</p>
                   </div>
                   <div className="block-right">
                       <div className="avatar-group" style={{ display: 'flex' }}>
                       {task.assigness?.map((mem, index) => {
                           return  <div className="avatar" key = {index}>
                               <img src={mem.avatar} alt={mem.avatar} />
                           </div>
                       })}
                           <div className="avatar">
                               <img src={require("../../../assets/img/download (1).jfif")} alt="hinhAnh" />
                           </div>
                           <div className="avatar">
                               <img src={require("../../../assets/img/download (2).jfif")} alt="hinhAnh" />
                           </div>
                       </div>
                   </div>
               </div>
           </li>
       })}
           
          
       </ul>
   </div>
   })
    }
    return (
       <>
           <div className="content" style={{ display: 'flex' }}>
                   
                          {renderListTask()}
                     
                    </div>
       </>
    )
}

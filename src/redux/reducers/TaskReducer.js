const initialState = {
    taskDetailModal:  {
        "priorityTask": {
          "priorityId": 1,
          "priority": "High"
        },
        "taskTypeDetail": {
          "id": 1,
          "taskType": "bug"
        },
        "assigness": [
          {
            "id": 40,
            "avatar": "https://ui-avatars.com/api/?name=thoa",
            "name": "thoa",
            "alias": "thoa"
          },
          {
            "id": 41,
            "avatar": "https://ui-avatars.com/api/?name=khải",
            "name": "khải",
            "alias": "khai"
          }
        ],
        "lstComment": [],
        "taskId": 41,
        "taskName": "task 1",
        "alias": "task-1",
        "description": "<p>task 1</p>",
        "statusId": "3",
        "originalEstimate": 10,
        "timeTrackingSpent": 10,
        "timeTrackingRemaining": 10
      }
}

 const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASK_DETAIL_REDUCER" : {
            state.taskDetailModal = action.taskDetailModal; 
            return {...state}
        }
    default:
        return state
    }
}
export default TaskReducer; 

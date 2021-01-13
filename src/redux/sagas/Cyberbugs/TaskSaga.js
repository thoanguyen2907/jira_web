import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugsService } from "../../../services/CyberbugsService";
import { STATUSCODE } from "../../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";

import { projectService } from "../../../services/ProjectService";
import { openNotificationWithIcon } from "../../../util/Notification/notificationCyberbugs";
import { history } from "../../../util/history/history";
import { GET_ALL_PROJECT_SAGA } from "../../constants/Cyberbugs/Cyberbugs";
import { taskService } from "../../../services/TaskService";


function * createTaskSaga (action){
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    }); 
    
    yield delay (500);  
    try {     
        //Gọi api lấy dữ liệu về
        const {data,status} = yield call(() => taskService.createTask(action.taskObject)); 
        console.log(status)
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUSCODE.SUCCESS) {
           console.log(status);
            openNotificationWithIcon('success', 'Get Project Detail', 'Create Task Successfully !!')
            // yield put ({
            //     type: "CREATE_TASK", 
            //     taskObject : data.content
            // })
        }
      
    } catch (err) {
        openNotificationWithIcon('error', 'Error', 'Error when creating task !!')
        console.log(err.response.data);
    } 
    yield put({
        type: "CLOSE_DRAWER"
    })
    yield put({
        type: HIDE_LOADING
    })
}
export function* theoDoiCreateTaskSaga(){
    yield takeLatest("CREATE_TASK_SAGA", createTaskSaga); 
}

function * getTaskDetailSaga (action){
    try {     
        //Gọi api lấy dữ liệu về
        const {data,status} = yield call(() => taskService.getTaskDetail(action.taskId)); 
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUSCODE.SUCCESS) {
            yield put ({
                type : "GET_TASK_DETAIL_REDUCER", 
                taskDetailModal: data.content
            })
        }
    } catch (err) {
        console.log(err.response.data);
    } 
}
export function* theoDoiGetTaskDetailSaga(){
    yield takeLatest("GET_TASK_DETAIL_SAGA", getTaskDetailSaga); 
}

function * updateTaskStatusSaga (action){
    try {     
        //Gọi api lấy dữ liệu về
        const {data,status} = yield call(() => taskService.updateStatusTask(action.taskStatusUpdate));
        console.log(status); 
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUSCODE.SUCCESS) {
            yield put ({
                type : "GET_PROJECT_DETAIL_SAGA", 
                id : action.taskStatusUpdate.id
            })
        }
    } catch (err) {
        console.log(err.response.data);
    } 
}
export function* theoDoiUpdateTaskStatusSaga(){
    yield takeLatest("UPDATE_TASK_STATUS_SAGA", updateTaskStatusSaga); 
}







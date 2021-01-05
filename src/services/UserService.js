import { BaseService } from "./BaseService";

export class UserService extends BaseService{

    getUser = (keyword) => {
       return this.get(`/Users/getUser?keyword=${keyword}`)
    }
    assignUserProject = (userProject) => {
        return this.post(`Project/assignUserProject`, userProject); 
    }
    deleteUserFromProject = (userProject) => {
        return this.post(`Project/removeUserFromProject`, userProject)
    }

}
export const userService = new UserService()




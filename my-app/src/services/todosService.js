import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const todosService = {
    getAll:()=> apiService.get(urls.todos)
}
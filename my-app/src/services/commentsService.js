import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const commentsService = {
    getAll:()=> apiService.get(urls.comments)
}
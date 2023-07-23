import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const postsService = {
    getAll:(id)=> apiService.get(urls.posts.byId(id))
}
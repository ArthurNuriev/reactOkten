import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: (postId)=> apiService.get(urls.posts.byId(postId))
}

export {postService}
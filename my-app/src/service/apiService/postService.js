
import {apiPlaceholderService} from "./apiPlaceholderService";
import {urls} from "../../const/urlsPlaceholder";

export const postService = {
    getAll:()=>apiPlaceholderService.get(urls.posts)
}
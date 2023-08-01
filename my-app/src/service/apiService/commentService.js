
import {apiPlaceholderService} from "./apiPlaceholderService";
import {urls} from "../../const/urlsPlaceholder";

export const commentService = {
    getAll:()=>apiPlaceholderService.get(urls.comments)
}
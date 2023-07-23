import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const albumsService = {
    getAll:()=> apiService.get(urls.albums)
}
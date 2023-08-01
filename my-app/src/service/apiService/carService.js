import {apiCarService} from "./apiCarService";
import {urlsCar} from "../../const/urlsCar";

export const carService = {
    getAll:()=>apiCarService.get(urlsCar.cars)
}
import axios from "axios";
import {baseURL} from "../../const/urlsCar";

const apiCarService = axios.create({baseURL});

export {apiCarService}
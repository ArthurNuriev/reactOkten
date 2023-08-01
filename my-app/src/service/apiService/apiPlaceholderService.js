import axios from "axios";
import {baseURL} from "../../const/urlsPlaceholder";

const apiPlaceholderService = axios.create({baseURL});

export {apiPlaceholderService}
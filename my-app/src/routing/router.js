import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../pages/AppLayout/AppLayout";
import {AppRouters} from "./AppRouters";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h2>Ooops</h2>,
        children:[
            {
                path: AppRouters.MAIN,
                element: <h2>main</h2>
            },
            {
                path: AppRouters.TODOS,
                element: <h2>todos</h2>
            },
            {
                path: AppRouters.ALBUMS,
                element: <h2>albums</h2>
            },
            {
                path: AppRouters.COMMENTS,
                element: <h2>comments</h2>
            }
        ]
    }

])
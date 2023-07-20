import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "../pages/AppLayout/AppLayout";
import {AppRouters} from "./AppRouters";
import {Todos} from "../components/Todos/Todos";
import {Albums} from "../components/Albums/Albums";
import {Comments} from "../components/Comments/Comments";
import {Posts} from "../components/Posts/Posts";


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
                element: <Todos/>
            },
            {
                path: AppRouters.ALBUMS,
                element: <Albums/>
            },
            {
                path: AppRouters.COMMENTS,
                element: <Comments/>,
                children:[
                    {
                        path: AppRouters.POSTID,
                        element: <Posts/>,
                    }
                ]
            },


        ]
    }

])
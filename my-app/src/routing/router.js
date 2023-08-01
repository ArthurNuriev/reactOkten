import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {CarPage} from "../pages/CarPage/CarPage";
import {CommentPage} from "../pages/CommentPage/CommentPage";
import {PostPage} from "../pages/PostPage/PostPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children:[
            {
                path: '/cars',
                element: <CarPage/>
            },
            {
                path: '/comments',
                element: <CommentPage/>
            },
            {
                path: '/posts',
                element: <PostPage/>
            }
        ]
    }
])

export {router}
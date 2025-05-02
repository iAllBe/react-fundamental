import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";

export const routes = [
    {path: '/', element: <Posts/>, exact: true},
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '*', element: <Error/>, exact: true},
]
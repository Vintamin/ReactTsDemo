import {ReactNode, lazy} from "react";
import Welcome from "../pages/Welcome";
import Lee from "../pages/Lee";

const Home = lazy(() => import("../pages/Home"));
const UserDetail = lazy(() => import("../pages/UserDetail"));

interface IRouter {
    id: number
    path: string
    title: string
    exact?: boolean
    component?: ReactNode
    children?: IRouter[]
}


export const router: IRouter[] = [
    {
        id: 1,
        path: '/',
        title: 'index page',
        exact: true,
        component: <Home/>
    },
    {
        id: 3,
        path: '/welcome',
        title: 'Welcome page',
        component: <Welcome/>
    },
    {
        id: 4,
        path: '/lee',
        title: 'Lee page',
        component: <Lee/>
    },
    {
        id: 2,
        path: '/user',
        title: 'user list',
        children: [
            {

                id: 3,
                path: '/user/detail/3',
                title: 'user detail 3 page',
                component: <UserDetail/>
            },
            {

                id: 4,
                path: '/user/detail/4',
                title: 'user detail 4 page',
                component: <UserDetail/>
            }
        ]
    }
]

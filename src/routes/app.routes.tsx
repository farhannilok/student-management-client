import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login } from "../pages/authentication/login/login";
import { Registration } from "../pages/authentication/registration/registration";
import Profile from "../pages/student/profile/profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Registration />
    },
])

export default router
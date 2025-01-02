import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login } from "../pages/authentication/login/login";
import Profile from "../pages/student/profile/profile";
import CourseTable from "../pages/student/course-table/course-table";
import ResultTable from "../pages/student/results/results-table";
import FacultyTable from "../pages/faculty/faculty-table";
import SubjectRegistration from "../pages/student/subject-registration/subject-registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/courses",
                element: <CourseTable />
            },
            {
                path: "/results",
                element: <ResultTable />
            },
            {
                path: "/faculty",
                element: <FacultyTable />
            },
            {
                path: "/subject-registration",
                element: <SubjectRegistration />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default router
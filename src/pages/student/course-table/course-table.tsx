// import React, { useState } from 'react';
// import useRestauarantAndBranch from '../../../../Hooks/useRestauarantAndBranch';
// import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
// import SetTitle from '../../../Shared/SetTtitle/SetTitle';
// import { Link, useLocation } from 'react-router-dom';
// import { IoAddOutline } from 'react-icons/io5';
// import AllEmployeeListRow from './AllEmployeeListRow';
// import LoadingPage from '../../../Shared/LoadingPages/LoadingPage/LoadingPage';
// import { useQuery } from 'react-query';
// import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
// import ErrorPage from '../../../Shared/ErrorPage/ErrorPage';

import { useQuery } from "@tanstack/react-query";
import CourseTableRow from "./course-table-row";


const CourseTable = () => {
    // const axiosSecure = useAxiosSecure();
    // const [searchQuery, setSearchQuery] = useState('')
    // const { branchID, res_id } = useRestauarantAndBranch();

    // const location = useLocation();

    // const reqURLData = {};


    // if (location.pathname === '/employee-list') {
    //     reqURLData.reqURL = `/restaurant/${res_id}/branch/${branchID}/all-employee-list`;
    //     reqURLData.h1 = "Employee List"

    // } else {
    //     reqURLData.reqURL = `/restaurant/${res_id}/all-employee-list`;
    //     reqURLData.h1 = "All Employee List"
    // }

    const { isLoading, error, data: data = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            // const res = await axiosSecure(reqURLData.reqURL);
            const res = [
                {
                    code: 201,
                    subject: "CSE Fundamental",
                    credit: 3,

                },
                {
                    code: 202,
                    subject: "Neural Network",
                    credit: 3,
                    preRequisite: "Artificial Intelligence"
                },
                {
                    code: 203,
                    subject: "English",
                    credit: 3,

                },
                {
                    code: 204,
                    subject: "Networking",
                    credit: 3,

                },
            ]
            // console.log(res.data)
            // return res.data
            return res
        }
    })

    // if (error) {
    //     return <ErrorPage />
    // }


    return (
        <section className='max-w-[1600px] mx-auto'>
            {/* <SetTitle title={reqURLData?.h1} />

            <div className='flex  gap-3 '>
                <div className='w-full '>
                    <SectionTitle h1={reqURLData?.h1} />
                </div>
                <div>
                    <Link to={`/add-employee`} className='flex justify-center items-center gap-2 text-white font-medium  px-4 py-2 bg-green-400 rounded-md text-nowrap '>Add Employee <IoAddOutline className='text-white' /></Link>

                </div>

            </div> */}
            {/* <div>

                <div className="relative max-w-md w-full mt-4">

                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md border-gray-300 py-2.5 px-4 border-2 sm:text-sm"
                        onChange={event => setSearchQuery(event.target.value)}
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div> */}
            <div className=''>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        {
                            // isLoading ? <LoadingPage />
                            //     :
                                <>
                                    <table className='min-w-full leading-normal'>
                                        <thead>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center'
                                                >
                                                    no.
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center'
                                                >
                                                    course code
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center'
                                                >Subject</th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center'
                                                >credit</th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center'
                                                >pre-requisite</th>
                                                {/* <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                                >
                                                    Role
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal text-center'
                                                >
                                                    Action
                                                </th> */}
                                            </tr>
                                        </thead>
                                        {/* <tbody>{data && Array.isArray(data) && data.map((employee, _idx) =>
                                            <AllEmployeeListRow
                                                key={_idx}
                                                employee={employee}
                                                axiosSecure={axiosSecure}
                                                refetch={refetch}
                                            />)}</tbody> */}
                                        <tbody>{data && Array.isArray(data) && data.map((course, _idx) =>
                                            <CourseTableRow
                                                key={_idx}
                                                course={course}
                                                index={_idx}
                                            />)}</tbody>
                                    </table>
                                </>
                        }

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseTable;
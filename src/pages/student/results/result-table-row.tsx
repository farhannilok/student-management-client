// import React from 'react';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { MdOutlineCheckCircle } from 'react-icons/md';
// import useRestauarantAndBranch from '../../../../Hooks/useRestauarantAndBranch';
// import { SwalErrorShow } from '../../../../assets/scripts/Utility';
// import edit from "../../../../assets/images/Home/edit.svg"
// import trash from "../../../../assets/images/Home/delete.svg"


// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import Employee_row_attendance from './Employee_row_attendance';



const ResultTableRow = ({ result }) => {


    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // const { branchID, res_id } = useRestauarantAndBranch();
    // let statusStyle, paymentStatus, icon;
    // switch (employee.role) {
    //     case 'Admin':
    //         statusStyle = 'bg-emerald-100 text-emerald-700'
    //         icon = <MdOutlineCheckCircle className="-ms-1 me-1.5 h-4 w-4" />
    //         break
    //     case 'Super-Admin':
    //         statusStyle = 'bg-emerald-100 text-emerald-700'
    //         icon = <MdOutlineCheckCircle className="-ms-1 me-1.5 h-4 w-4" />
    //         break
    //     case 'Kitchen Staff':
    //         statusStyle = 'bg-purple-100 text-purple-700'
    //         break
    //     case 'Customer Service':
    //         statusStyle = 'bg-amber-100 text-amber-700'
    //         break
    //     case 'Delivery Boy':
    //         statusStyle = 'bg-blue-100 text-blue-700'
    //         break
    // }
    // const handleDeleteEmployee = id => {
    //     if (employee?.role === "Super-Admin") {
    //         Swal.fire({
    //             title: "Deleted!",
    //             text: "Super Admin can not be deleted",
    //             icon: "error"
    //         });
    //         return;
    //     }
    //     console.log(id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: `You want to remove ${employee?.f_name} ${employee?.l_name} from your employee`,
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             axiosSecure.delete(`/admin/restaurant/${res_id}/branch/${branchID}/delete/employee/${employee?._id}`)
    //                 .then(res => {
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                     });
    //                     refetch();
    //                 })
    //                 .catch(e => {
    //                     console.error(e);
    //                     SwalErrorShow(e);
    //                 })

    //         }
    //     });
    // }
    return (

        <tr className='border-b dark:border-b-gray-100'>
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>
                <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.code}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>
                <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.subject}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>

            <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.faculty}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>

            <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.batch}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>

            <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.grade}
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center dark:bg-inherit dark:text-white'>

            <span
                    className='text-gray-900 whitespace-no-wrap block dark:text-gray-200'
                >

                    {result?.point}
                </span>
            </td>


            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <span
                    className={`inline-flex items-center justify-center rounded-full  px-2.5 py-0.5 ${statusStyle}`}
                >
                    {
                        icon
                    }

                    <p className="whitespace-nowrap text-sm text-center">{course?.role}</p>
                </span>
            </td> */}
            {/* <td className='py-5  bg-white text-sm flex justify-center items-center gap-1'>
                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-1 md:gap-0 items-center'
                >
                    <Link title="Edit category" to={`/update-employee-profile/${employee?._id}`} className="inline-flex ml-3 cursor-pointer"><img src={edit} /></Link>
                    {
                        employee?.role === "Super-Admin" || <span title="Delete category" onClick={() => handleDeleteEmployee(employee._id)} className="inline-flex ml-3 cursor-pointer"><img src={trash} /></span>
                    }

                </span>

                <span
                    className='text-gray-900 whitespace-no-wrap flex flex-col md:flex-row gap-1 md:gap-0 items-center'
                >
                    <button onClick={onOpen} className="inline-flex ml-3 cursor-pointer">
                        <svg className='w-6 h-6 text-gray-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.5 9.08997H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>


                </span>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <ModalBody className='h-fit max-h-[85vh] overflow-scroll pt-0 mx-0 px-0 scrollbar-hide'>
                                <Employee_row_attendance branchID={branchID} res_id={res_id} employee_ID={employee?._id}/>
                            </ModalBody>
                        )}
                    </ModalContent>
                </Modal>
            </td> */}


        </tr>

    );
};

export default ResultTableRow;
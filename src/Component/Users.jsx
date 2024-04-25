import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsersData = useLoaderData()
    const [usersData, setUserData] = useState(loadedUsersData)

    const handelDeleteUser=(_id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://user-management-systemt-server.vercel.app/user/${_id}`, {

                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            })
        
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount>0) {
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });      
                              
                            setUserData(  usersData.filter(data=>data._id!==_id))
                    }
                })



            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });

        console.log(_id);
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-4"> Users </h1>

            <hr />
            <div className="overflow-x-auto w-10/12 m-auto my-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" bg-slate-700 text-gray-100">
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            usersData.map((data,index)=><tr key={index}>
                            <th>{index+1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td> <Link to={`/edit-user/${data._id}`}><button  className="text-2xl btn btn-ghost"><FaEdit></FaEdit> </button></Link></td>
                            <td><button onClick={()=>handelDeleteUser(data._id)} className="text-2xl btn btn-ghost"><MdDelete></MdDelete></button></td>
                        </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;
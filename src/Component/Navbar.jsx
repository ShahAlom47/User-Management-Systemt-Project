import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div >
           <div className="flex "> 
           <NavLink to={'/'}><button className="btn btn-link ">All User </button></NavLink>
           <NavLink to={'/add-user'}><button className="btn btn-link"> Add New Users </button></NavLink>
           
           </div>
        </div>
    );
};

export default Navbar;
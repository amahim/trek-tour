import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import {Toaster} from "react-hot-toast"


const AuthLayout = () => {
    return (
        <div>
             <Toaster/>
            <div className="w-4/5 mx-auto py-5">
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;
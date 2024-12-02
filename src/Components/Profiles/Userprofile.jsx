import { useContext } from "react";
import  { Helmet } from "react-helmet-async"
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Userprofile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                 <title>EcoAdventure | My-profile</title>
            </Helmet>
            <div className="text-center mb-5">
                 <h1 className="text-2xl font-bold text-blue-600">
                 <span className="font-medium text-black">Welcome</span> {user && user?.email ? (user?.displayName):("User")}
                </h1>  
            </div>
            <div className="rounded-lg md:w-3/5 lg:w-2/5 mx-auto  pb-10 border-2 border-blue-400">
                {
                    (user && user?.email) ? (
                        <div className="flex flex-col items-center text-center pt-5">
                                <img
                                    src={user?.photoURL}
                                    className="rounded-lg w-52 "
                                    alt="User Avatar"
                                />
                                <div className="divider"></div>
                                <div className="space-y-2">
                                    <h1 className="text-xl font-bold">Name : {user?.displayName}</h1>
                                    <h1 className="text-xl font-bold">Email : {user?.email}</h1>

                                </div>
                                <div className="mt-4">
                                    {/* <Link to="/update-profile" className="btn bg-blue-400 text-white rounded-lg">Update Profile</Link> */}
                                    <Link 
                                        to="/update-profile" 
                                        state={{ name: user?.displayName, photoURL: user?.photoURL }} 
                                        className="btn bg-blue-400 text-white rounded-lg">
                                        Update Profile
                                    </Link>

                                </div>
                        </div>
                    ) : ("Plz login")
                }
            </div>
        </div>
    );
};

export default Userprofile;
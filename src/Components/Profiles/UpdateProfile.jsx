import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const UpdateProfile = () => {
    const { setUser } = useContext(AuthContext);
    const auth = getAuth();
    const navigate = useNavigate();
    const {state} = useLocation()

    const updateInfoBtnHandle = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");

        // Update
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser({
                    ...auth.currentUser,
                    displayName: name,
                    photoURL: photo,
                });
                toast.success("Profile updated successfully");
                navigate("/my-profile");
            })
            .catch((error) => {
                toast.error(`Error updating profile: ${error.message}`);
            });
    };

    return (
        <div>
            <Helmet>
                <title>EcoAdventure | Update Profile</title>
            </Helmet>
            <h1 className="text-center font-bold text-2xl mb-5">Update Your Profile</h1>
            <form
                onSubmit={updateInfoBtnHandle}
                className="md:w-2/5 mx-auto w-4/5 pb-10 border-2 border-blue-400 rounded-lg"
            >
                <div className="form-control w-4/5 mx-auto mt-5">
                    <label className="label">
                        <span className="label-text">Update Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        name="name"
                        defaultValue={state?.name}
                        required
                    />
                </div>
                <div className="form-control w-4/5 mx-auto">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Update Photo URL"
                        className="input input-bordered"
                        name="photo"
                        defaultValue={state?.photoURL}
                        required
                    />
                </div>
                <div className="form-control w-4/5 mx-auto mt-6">
                    <button type="submit" className="btn bg-blue-400 rounded-lg border-none text-white">
                        Update Information
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;

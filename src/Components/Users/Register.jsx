
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';
const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    // const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        // setSuccess(false);

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Password validation
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!regex.test(password)) {
            setErrorMessage('Password should have at least one uppercase and one lowercase letter and must be 6 characters long');
            return;
        }

        // Create user
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                // setSuccess(true); 
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/"); 
                    })
                    .catch((err) => console.error(err));
            })
            .catch((error) => {
                // console.error("Error:", error.message);
                setErrorMessage(error.message);
            });
    };

    return (
        <div className="md:w-2/5 mx-auto w-4/5 pb-10">
            
            <Helmet>
                <title>EcoAdventure | Register</title>
            </Helmet>
            <div>
                <h1 className="text-center font-bold text-2xl">Register your account</h1>
            </div>
            <form onSubmit={handleRegSubmit} className="card-body border-2 rounded-xl mt-5 shadow-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        name="name"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input
                        type="text"
                        placeholder="photo url"
                        className="input input-bordered"
                        name="photo"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        name="email"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        name="password"
                        required
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-blue-400 text-white">Register</button>
                </div>
                
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                {/* {success && toast.success('Registration successful')} */}
                <div>
                    <h1>
                        Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link>
                    </h1>
                </div>
            </form>
            
        </div>
    );
};

export default Register;

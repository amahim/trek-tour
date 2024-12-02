import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast from "react-hot-toast"
import { Helmet } from 'react-helmet-async';
const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');
    const auth = getAuth();
    const handleForgetPasswordSubmit = (e) => {
        e.preventDefault();
        
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Reset password email sent")
            window.open("https://mail.google.com", "_blank");
        })
        .catch((error) => {
            toast.error(error.message)
        });
    };

    return (
        <div className="md:w-2/5 mx-auto w-4/5 pb-10">
            <Helmet>
                 <title>EcoAdventure | Forget Password</title>
            </Helmet>
            <h1 className="text-center font-bold text-2xl">Reset Your Password</h1>
            <form onSubmit={handleForgetPasswordSubmit} className="card-body border-2 mt-10 rounded-xl shadow-xl">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control mt-6">
                    <button  className="btn bg-blue-400 text-white">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;

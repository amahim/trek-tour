import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import  { Helmet } from "react-helmet-async"
import { Toaster } from "react-hot-toast";


const Home = () => {
    
    return (
        <div className="w-4/5 mx-auto">
            <Toaster></Toaster>
           
            <Helmet>
                 <title>EcoAdventure | Home</title>
            </Helmet>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;
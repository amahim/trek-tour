import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-10 ">
            <footer className=" rounded-lg footer bg-blue-300 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/mahimarif_uck?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >
                        <FaInstagramSquare className="text-3xl"/>
                    </a>
                    <a href="https://github.com/amahim">
                        <FaGithubSquare className="text-3xl"/>
                    </a>
                    <a href="https://www.facebook.com/Mahim.Arif2/">
                        <FaFacebookSquare className="text-3xl"/>
                    </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
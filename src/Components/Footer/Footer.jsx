import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-blue-200 text-base-content p-10">
                <aside>
                    <img height={100} width={150} src="/logo.png" alt="Sports Corner Logo" />
                    <p>
                        Sports Corner Ltd.
                        <br />
                        Providing reliable kits since 1992
                    </p>
                </aside>
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
                    <h1 className="footer-title">OUR SOCIALS</h1>
                    <nav className='flex gap-3'>
                        <FaFacebook className='text-3xl text-blue-600' />
                        <RiInstagramFill className='text-3xl text-[#FC01C9]' />
                        <FaTwitter className='text-3xl text-blue-600'  />
                    </nav>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;
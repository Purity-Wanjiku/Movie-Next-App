import React from "react";
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-8 border-t-2 border-yellow-400">
      <div className="container mx-auto py-10 px-28">
        <div className="flex justify-between">
          <div className="footer-div-1">
            <h3 className="text-md font-semibold">Download Our App</h3>
            <h1 className="text-xl font-bold">M<span className="text-yellow-500">oo</span>vie</h1>
          </div>

          <div className="font-light">
            <h3 className="text-md font-semibold">Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
          </div>

          <div className="font-light">
            <h3 className="text-md font-semibold">Legal</h3>
            <p>General Terms</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>

          <div className="font-light">
            <h3 className="text-md font-semibold">Contact Us:</h3>
            <p>Email: support@moovie.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Follow Us:</p>
            <div className="flex">
              <a href="#" className="mr-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="mr-2">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="font-light">
            <h3 className="text-md font-semibold">Share Website Via:</h3>
            <p className="flex "><span className="mr-3 mt-1"><FaFacebook size={18} color="#fff" /></span>Facebook</p>
            <p className="flex "><span className="mr-3 mt-1"><AiFillInstagram size={19} color="#fff" /></span>Instagram</p>
          </div>
        </div>
        <hr className="my-6 w-96 mx-[12cm] border-t border-gray-500" />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2023 Moovie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

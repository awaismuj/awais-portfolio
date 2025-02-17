import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hover: { scale: 1.2, transition: { duration: 0.4 } },
  tap: { scale: 0.9 },
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-[40px] mt-5 max-w-7xl mx-auto">
      <div className="px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">Awais Younas</h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <motion.a
                href="https://github.com/awaismuj"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-3xl text-gray-300 hover:text-[#333] transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/awais-younas-mughal-45903b143"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-3xl text-gray-300 hover:text-[#0077b5] transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://web.facebook.com/profile.php?id=100087521425404"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-3xl text-gray-300 hover:text-[#1877f2] transition-colors duration-300"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/awaisyounasmughal?igsh=MTc1a215d2ppZ2lrZw=="
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-3xl text-gray-300 hover:text-[#E1306C] transition-colors duration-300"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="mailto:awais.muj@gmail.com"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-3xl text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mt-1 text-center">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

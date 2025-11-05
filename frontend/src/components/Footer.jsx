import React from "react";

const Footer = ({ theme, setTheme }) => {
  return (
    <footer
      className={`${theme === "dark" ? "bg-[#00002B]" : "bg-[#F2F2F2]"} text-${
        theme === "dark" ? "white" : "gray-800"
      } py-8`}
    >
      <div className="container mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#FF1377] mb-4">About Us</h3>
            <p className="text-sm">
              We are dedicated to improving road safety through innovative
              technology solutions. Our mission is to make roads safer for
              everyone.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#FF1377] mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-[#FF1377]">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#FF1377]">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#FF1377]">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#FF1377]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-[#FF1377] mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: 40685540@live.napier.ac.uk</p>
            <p className="text-sm mb-2">Email: aungchan454545k@gmail.com</p>
            <p className="text-sm mb-2">Phone: +95 9965196722</p>
            <p className="text-sm mb-2">Address: No 15. Shwe Street,</p>
          </div>
        </div>

        {/* Bottom Section: Copyright and Theme Toggle */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TrafficAI. All rights reserved.
          </p>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-[#FF1377] text-white px-4 py-2 rounded-lg"
          >
            {theme === "dark" ? "Light" : "Dark"} Theme
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
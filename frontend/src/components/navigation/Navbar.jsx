import React from "react";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="bg-white text-black px-6 py-4 border-b-2 border-black">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/"><img src={"/logo.svg"} alt="memmobuddy" height={150} width={150}></img></a>
                </div>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="/" className="hover:font-semibold">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-gray-300">
                            Services
                        </a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="space-x-4">
                    <a href="/login">
                        <Button>
                            Login
                        </Button>
                    </a>
                    <a href="/register">
                        <Button>
                            Signup
                        </Button>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

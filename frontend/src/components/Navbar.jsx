import React, { useState } from 'react';
import { RiMenu3Line,RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className=" sticky top-0   z-50">
			<div className="px-4 backdrop-blur-xl bg-secondary2 bg-opacity-25 bg-zinc-100 rounded-full flex justify-between items-center">
				{/* Logo */}
				<span className="text-xl font-bold bg-clip-text">
					<h1>SharedSpace.</h1>
				</span>

				{/* Menu */}
				<ul className={`md:flex md:flex-row md:space-x-8 md:justify-center ${isOpen ? 'block shadow-4xl backdrop-blur-3xl bg-secondary2 bg-opacity-100 rounded-2xl my-2' : 'hidden'} absolute top-full left-0 ${isOpen? 'w-full':'w-fit'} py-4 md:bg-transparent md:static`}>
					<li>
						<Link to={"/"} className="text-base px-4 py-2 text-primary border-b-2 border-primary block" href="#home">
							Home
						</Link>
					</li>
					<li>
						<a className="text-base px-4 py-2 block" href="#services">
							Services
						</a>
					</li>
					<li>
						<a className="text-base px-4 py-2 block" href="#about">
							About Us
						</a>
					</li>
					<li>
						<a className="text-base px-4 py-2 block" href="#contact">
							Contact
						</a>
					</li>
				</ul>

				{/* Call to Action Button */}

				<Link to={"/login"} className="hidden md:block shadow-3xl text-zinc-100 bg-primary rounded-full px-4 py-2">
					Login / Register
				</Link>

      


				{/* Mobile Menu Toggle Button */}
				<button
					className="md:hidden text-2xl block "
					onClick={toggleMenu}
				>
					{isOpen ? (
						<RiCloseFill/>
					) : (
						<RiMenu3Line />
					)}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;

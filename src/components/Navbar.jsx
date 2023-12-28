import { useRef, useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constant';

const Navbar = () => {
	const [toggole, setToggole] = useState(false);

	return (
		<nav className=" w-full flex py-6 justify-between items-center navbar">
			{/* Logo */}
			<img className="w=[124px] h-[32px]" src={logo} alt="hoo_bank_logo" />
			{/* Navlink */}
			<ul className="list-none hidden sm:flex justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={index}
						className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			{/* Mobie View */}
			<div className=" sm:hidden flex flex-1 justify-end">
				<img
					src={toggole ? close : menu}
					alt="menuIcon"
					className=" w-[28px] h-[28px] object-contain cursor-pointer"
					onClick={() => setToggole((currentValue) => !currentValue)}
				/>
				<div
					className={`${
						toggole ? 'flex' : 'hidden'
					} p-3 bg-black-gradient absolute right-0 min-w-[150px] top-20 mx-4 my-2 rounded-lg sidebar`}
				>
					{/* Navlink */}
					<ul className="list-none flex flex-col sm:hidden justify-start items-start flex-1 ">
						{navLinks.map((nav, index) => (
							<li
								key={index}
								className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
				s
			</div>
		</nav>
	);
};

export default Navbar;

import { useState } from 'react';
import clsx from 'clsx';
import Logo from '../assets/icons/logo.svg?react';
import BurgerMenu from '../assets/icons/burger-menu.svg?react';
import CloseIcon from '../assets/icons/close.svg?react';

export default function Header() {
	const [isSidebarActive, setIsSidebarActive] = useState(false);

	function toggleSidebar() {
		setIsSidebarActive(!isSidebarActive);
	}

	return (
		<header>
			<div className="max-w-[77.5rem] mx-auto px-5 py-8 md:py-14 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Logo className="text-brand-dark-900 w-6 h-6 xl:w-9 xl:h-9" />
					<h1 className="text-xl font-medium xl:text-4xl">Positivus</h1>
				</div>

				{/* Mobile nav */}
				<div
					className={clsx(
						!isSidebarActive && 'translate-x-full',
						'fixed top-0 right-0 z-50 w-full h-full md:max-w-96 bg-brand-gray-200 p-8 flex flex-col lg:hidden transition-transform'
					)}
				>
					<button onClick={toggleSidebar} className="self-end">
						<span className="sr-only">Close navigation sidebar</span>
						<CloseIcon />
					</button>

					<nav className="mt-16 flex flex-col items-center justify-center gap-6 text-xl">
						<a href="">About us</a>
						<a href="">Services</a>
						<a href="">Use Cases</a>
						<a href="">Pricing</a>
						<a href="">Blog</a>
						<a href="">Request a quote</a>
					</nav>
				</div>

				{/* Desktop nav */}
				<nav className="hidden xl:text-xl lg:flex items-center gap-6 lg:gap-10">
					<a href="">About us</a>
					<a href="">Services</a>
					<a href="">Use Cases</a>
					<a href="">Pricing</a>
					<a href="">Blog</a>
					<a
						href=""
						className="border-[1px] border-brand-dark-900 py-5 px-9 rounded-lg"
					>
						Request a quote
					</a>
				</nav>

				<button onClick={toggleSidebar} className="lg:hidden">
					<span className="sr-only">Open navigation sidebar</span>
					<BurgerMenu />
				</button>
			</div>
		</header>
	);
}
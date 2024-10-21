import Logo from '../assets/icons/logo.svg?react';
import LinkedInIcon from '../assets/icons/linkedin.svg?react';
import FacebookIcon from '../assets/icons/facebook.svg?react';
import TwitterIcon from '../assets/icons/twitter.svg?react';

export default function Footer() {
	return (
		<footer className="mt-24 lg:mt-36">
			<div className="max-w-[77.5rem] mx-auto px-5 lg:px-16 py-8 lg:py-14 lg:rounded-t-[2.5rem] bg-brand-dark-900 text-brand-gray-200">
				<div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
					<div className="flex items-center gap-2">
						<Logo className="w-6 h-6 xl:w-9 xl:h-9" />
						<h2 className="text-xl lg:text-3xl font-medium">Positivus</h2>
					</div>

					<nav className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center">
						<a href="" className="underline">
							About us
						</a>
						<a href="" className="underline">
							Services
						</a>
						<a href="" className="underline">
							Use cases
						</a>
						<a href="" className="underline">
							Pricing
						</a>
						<a href="" className="underline">
							Blog
						</a>
					</nav>

					<div className="hidden lg:flex gap-8">
						<a href="#">
							<LinkedInIcon />
						</a>
						<a href="#">
							<FacebookIcon />
						</a>
						<a href="#">
							<TwitterIcon />
						</a>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-8 py-9 mb-10 lg:my-10 border-b-[1px] border-brand-gray-200">
					<div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-4 lg:max-w-[20rem]">
						<h3 className="bg-brand-green-300 text-brand-dark-900 text-lg lg:text-xl font-medium px-1 rounded-md mb-2">
							Contact us:
						</h3>
						<p>Email: info@positivus.com</p>
						<p>Phone: 555-567-8901</p>
						<p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
					</div>

					<form
						onSubmit={(e) => e.preventDefault()}
						className="bg-[#292A32] rounded-2xl flex flex-col lg:flex-row lg:items-center gap-6 p-8 lg:ml-auto"
					>
						<label htmlFor="newsletter-email">
							<input
								type="text"
								name="email"
								id="newsletter-email"
								placeholder="Email"
								className="px-5 py-4 lg:px-8 border-[1px] bg-brand-dark-900 rounded-xl outline-none w-full"
							/>
						</label>

						<button className="flex justify-center items-center py-5 px-9 bg-brand-green-300 text-brand-dark-900 rounded-xl">
							Subscribe to news
						</button>
					</form>

					<div className="flex justify-center gap-8 lg:hidden">
						<a href="#">
							<LinkedInIcon />
						</a>
						<a href="#">
							<FacebookIcon />
						</a>
						<a href="#">
							<TwitterIcon />
						</a>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row text-center lg:text-start lg:justify-between gap-4">
					<p>© 2023 Positivus. All Rights Reserved.</p>
					<a href="#" className="underline">
						Privacy Policy
					</a>
					<p>
						Designed by{' '}
						<a
							href="https://www.figma.com/@olgaaverchenko"
							className="underline"
						>
							@olgaaverchenko
						</a>{' '}
						on Figma
					</p>
				</div>
			</div>
		</footer>
	);
}

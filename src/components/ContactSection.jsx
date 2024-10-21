import { useState } from 'react';
import Container from './Container';
import ContactImage from '../assets/images/contact.svg?react';

export default function ContactSection() {
	const [inquiryType, setInquiryType] = useState('sayHi');

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="mt-16 mb-24 md:my-36">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 px-5 my-10 md:my-20">
					<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
						Contact Us
					</h2>
					<p className="max-w-[30ch] text-center md:text-left">
						Connect with Us: Let's Discuss Your Digital Marketing Needs
					</p>
				</div>

				<div className="bg-brand-gray-200 rounded-[2.5rem] px-4 md:px-8 md:px-24 !md:pr-0 py-12 md:py-20 mb-8 overflow-hidden">
					<div className="grid md:grid-cols-2 items-center">
						<form className="flex flex-col">
							<div className="flex items-center gap-2 md:gap-4 mb-9">
								<div className="flex items-center">
									<div className="grid place-items-center">
										{inquiryType === 'sayHi' && (
											<div className="w-4 rounded-full aspect-square bg-brand-green-300 col-start-1 row-start-1 z-10 cursor-pointer"></div>
										)}
										<input
											type="radio"
											value="sayHi"
											id="contact-say-hi"
											checked={inquiryType === 'sayHi'}
											onChange={(e) => setInquiryType(e.target.value)}
											className="appearance-none w-7 rounded-full aspect-square border-[1px] border-brand-dark-900 bg-white col-start-1 row-start-1 cursor-pointer"
										/>
									</div>
									<label
										htmlFor="contact-say-hi"
										className="pl-2 md:pl-4 cursor-pointer"
									>
										Say Hi
									</label>
								</div>

								<div className="flex items-center">
									<div className="grid place-items-center">
										{inquiryType === 'getQuote' && (
											<div className="w-4 rounded-full aspect-square bg-brand-green-300 col-start-1 row-start-1 z-10 cursor-pointer"></div>
										)}
										<input
											type="radio"
											value="getQuote"
											id="contact-quote"
											checked={inquiryType === 'getQuote'}
											onChange={(e) => setInquiryType(e.target.value)}
											className="appearance-none w-7 rounded-full aspect-square border-[1px] border-brand-dark-900 bg-white col-start-1 row-start-1 cursor-pointer"
										/>
									</div>
									<label
										htmlFor="contact-quote"
										className="pl-2 md:pl-4 cursor-pointer"
									>
										Get a Quote
									</label>
								</div>
							</div>

							<label htmlFor="contact-name">Name</label>
							<input
								type="text"
								name="name"
								id="contact-name"
								placeholder="Name"
								className="px-5 py-4 md:px-8 mb-5 md:mb-8 border-[1px] border-brand-dark-900 rounded-xl outline-none"
							/>

							<label htmlFor="contact-email">Email*</label>
							<input
								type="email"
								name="email"
								id="contact-email"
								placeholder="Email"
								required
								className="px-5 py-4 md:px-8 mb-5 md:mb-8 border-[1px] border-brand-dark-900 rounded-xl outline-none"
							/>

							<label htmlFor="contact-message">
								{inquiryType === 'sayHi' ? 'Message*' : 'Project Details*'}
							</label>
							<textarea
								name="message"
								id="contact-message"
								placeholder={
									inquiryType === 'sayHi' ? 'Message' : 'Project Details'
								}
								className="px-5 py-4 md:px-8 mb-5 md:mb-8 border-[1px] border-brand-dark-900 rounded-xl outline-none"
							></textarea>

							{inquiryType === 'getQuote' && (
								<>
									<label htmlFor="contact-budget">Budget*</label>
									<input
										type="text"
										name="budger"
										id="contact-budget"
										placeholder="Budget"
										className="px-5 py-4 md:px-8 mb-5 md:mb-8 border-[1px] border-brand-dark-900 rounded-xl outline-none"
									/>
								</>
							)}

							<button
								type="submit"
								onClick={handleSubmit}
								className="hidden md:flex justify-center items-center w-full py-5 bg-brand-dark-900 text-white rounded-xl"
							>
								Send Message
							</button>
						</form>

						<div className="hidden md:block">
							{/*
              Hacky method to get the svg in the correct position.
              Need to crop the svg file to place it properly.
              */}
							<ContactImage className="translate-x-[15%] lg:translate-x-[35%]" />
						</div>
					</div>
				</div>

				<button
					onClick={handleSubmit}
					className="flex md:hidden justify-center items-center w-full py-5 bg-brand-dark-900 text-white rounded-xl"
				>
					Send Message
				</button>
			</Container>
		</section>
	);
}

import Container from './Container';
import LinkIcon from '../assets/icons/link.svg?react';
import AltLinkIcon from '../assets/icons/link-alt.svg?react';
import magnifierImg from '../assets/images/magnifier.png';
import selectingImg from '../assets/images/selecting.png';
import browserWindowImg from '../assets/images/browser-window.png';
import messagesImg from '../assets/images/messages.png';
import manyWindowsImg from '../assets/images/many-browser-windows.png';
import analyticsImg from '../assets/images/analytics.png';

export default function ServicesSection() {
	return (
		<section id="services" className="my-16 md:my-36">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 my-10 md:my-20">
					<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
						Services
					</h2>
					<p className="max-w-[55ch] text-center md:text-left">
						At our digital marketing agency, we offer a range of services to
						help businesses grow and succeed online. These services include:
					</p>
				</div>

				<div className="grid lg:grid-cols-2 justify-center gap-10">
					<div className="bg-brand-gray-200 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									Search engine
								</p>
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									optimization
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<AltLinkIcon />
								<span className="hidden lg:block hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img src={magnifierImg} alt="A magnifying glass" />
						</div>
					</div>

					<div className="bg-brand-green-300 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									Pay-per-click
								</p>
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									advertising
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<AltLinkIcon />
								<span className="hidden lg:block hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img
								src={selectingImg}
								alt="A cursor selecting a checkbox on a browser window"
							/>
						</div>
					</div>

					<div className="bg-brand-dark-900 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									Social media
								</p>
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									Marketing
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<LinkIcon />
								<span className="hidden lg:block text-brand-gray-200 hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img
								src={browserWindowImg}
								alt="A browser window with a smiling emoticon surrounded by heart and star icons"
							/>
						</div>
					</div>

					<div className="bg-brand-gray-200 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									Email
								</p>
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									marketing
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<AltLinkIcon />
								<span className="hidden lg:block hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img
								src={messagesImg}
								alt="Messages traveling from one place to another"
							/>
						</div>
					</div>

					<div className="bg-brand-green-300 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									Content
								</p>
								<p className="bg-brand-gray-200 max-w-max px-1 rounded-lg">
									Creation
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<AltLinkIcon />
								<span className="hidden lg:block hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img src={manyWindowsImg} alt="Multiple browser windows" />
						</div>
					</div>

					<div className="bg-brand-dark-900 border-[1px] border-b-8 border-brand-dark-900 p-12 rounded-[2.5rem] max-w-[37.5rem] overflow-hidden grid grid-cols-2 grid-rows-[max-content_1fr] gap-y-7 gap-x-4">
						<div className="col-span-2 md:col-span-1 flex">
							<h3 className="text-2xl lg:text-3xl font-medium">
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									Analytics and
								</p>
								<p className="bg-brand-green-300 max-w-max px-1 rounded-lg">
									Tracking
								</p>
							</h3>
						</div>

						<div className="self-end">
							<a href="#" className="flex items-center gap-4">
								<LinkIcon />
								<span className="hidden lg:block text-brand-gray-200 hover:underline">
									Learn more
								</span>
							</a>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center">
							<img
								src={analyticsImg}
								alt="Various browser windows displaying analytics"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

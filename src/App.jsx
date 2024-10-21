import Header from './components/Header';
import LogoSection from './components/LogoSection';
import ServicesSection from './components/ServicesSection';
import Container from './components/Container';
import HeroImage from './assets/images/hero.svg?react';
import CTAImage from './assets/images/cta-image.svg?react';

function App() {
	return (
		<div className="font-space-grotesk">
			<Header />

			<section className="mb-14 lg:my-16">
				<Container>
					<div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 lg:gap-x-28">
						<div>
							<h2 className="font-medium text-[2.5rem] lg:text-6xl">
								Navigating the digital landscape for success
							</h2>
						</div>

						<div className="md:row-span-2 my-8 md:my-0">
							<HeroImage className="max-w-full h-full" />
						</div>

						<div id="about" className="flex flex-col gap-10">
							<p className="lg:text-xl">
								Our digital marketing agency helps businesses grow and succeed
								online through a range of services including SEO, PPC, social
								media marketing, and content creation.
							</p>
							<button className="flex justify-center items-center py-5 px-9 bg-brand-dark-900 text-white rounded-xl md:self-start">
								Book a consultation
							</button>
						</div>
					</div>
				</Container>
			</section>

			<LogoSection />

			<ServicesSection />

			<section className="my-16 md:my-32">
				<Container>
					<div className="bg-brand-gray-200 rounded-[2.5rem] grid md:grid-cols-2 justify-items-center items-center">
						<div className="flex flex-col gap-5 p-12">
							<h2 className="text-2xl font-medium">Let's make things happen</h2>

							<p>
								Contact us today to learn more about how our digital marketing
								services can help your business grow and succeed online.
							</p>

							<button className="flex justify-center items-center py-5 md:px-9 bg-brand-dark-900 text-white rounded-xl md:self-start">
								Get your <span className="hidden">free</span> proposal
							</button>
						</div>

						<div className="hidden md:block max-w-max">
							<CTAImage className="scale-110" />
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default App;

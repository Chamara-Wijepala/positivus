import Header from './components/Header';
import LogoSection from './components/LogoSection';
import ServicesSection from './components/ServicesSection';
import AccordionSection from './components/AccordionSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Container from './components/Container';
import HeroImage from './assets/images/hero.svg?react';
import CTAImage from './assets/images/cta-image.svg?react';
import AltLinkIcon from './assets/icons/link-alt.svg?react';

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

			<section className="my-16 md:my-36">
				<div className="max-w-[77.5rem] mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 px-5 my-10 md:my-20">
						<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
							Case Studies
						</h2>
						<p className="max-w-[55ch] text-center md:text-left">
							Explore Real-Life Examples of Our Proven Digital Marketing Success
							through Our Case Studies
						</p>
					</div>

					<div className="px-5 py-5 grid gap-5 grid-flow-col auto-cols-[21.875rem] overflow-x-scroll xl:bg-brand-dark-900 xl:rounded-[2.5rem] xl:justify-between xl:grid-cols-[1fr_min-content_1fr_min-content_1fr]">
						<div className="bg-brand-dark-900 text-brand-gray-200 py-10 px-12 rounded-[2.5rem]">
							<p className="mb-5">
								For a local restaurant, we implemented a targeted PPC campaign
								that resulted in a 50% increase in website traffic and a 25%
								increase in sales.
							</p>

							<div>
								<a href="#" className="flex items-center gap-4">
									<span className="text-brand-green-300">Learn more</span>
									<AltLinkIcon />
								</a>
							</div>
						</div>

						<span className="hidden xl:block my-10 border-[1px] border-brand-gray-200 border-opacity-50"></span>

						<div className="bg-brand-dark-900 text-brand-gray-200 py-10 px-12 rounded-[2.5rem]">
							<p className="mb-5">
								For a B2B software company, we developed an SEO strategy that
								resulted in a first page ranking for key keywords and a 200%
								increase in organic traffic.
							</p>

							<div>
								<a href="#" className="flex items-center gap-4">
									<span className="text-brand-green-300">Learn more</span>
									<AltLinkIcon />
								</a>
							</div>
						</div>

						<span className="hidden xl:block my-10 border-[1px] border-brand-gray-200 border-opacity-50"></span>

						<div className="bg-brand-dark-900 text-brand-gray-200 py-10 px-12 rounded-[2.5rem]">
							<p className="mb-5">
								For a national retail chain, we created a social media marketing
								campaign that increased followers by 25% and generated a 20%
								increase in online sales.
							</p>

							<div>
								<a href="#" className="flex items-center gap-4">
									<span className="text-brand-green-300">Learn more</span>
									<AltLinkIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<AccordionSection />

			<TeamSection />

			{/* TODO: Add testimonials section */}

			<ContactSection />
		</div>
	);
}

export default App;

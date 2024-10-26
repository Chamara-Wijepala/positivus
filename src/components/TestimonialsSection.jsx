import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Container from './Container';
import ArrowLeft from '../assets/icons/arrow-left.svg?react';
import ArrowRight from '../assets/icons/arrow-right.svg?react';
import Indicator from '../assets/icons/carousel-indicator.svg?react';

const testimonials = [
	{
		key: 1,
		name: 'John Smith',
		title: 'Marketing Director at XYZ Corp',
		description:
			'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
	},
	{
		key: 2,
		name: 'Sarah Thompson',
		title: 'CEO at Creative Solutions Inc.',
		description:
			'"Working with Positivus has transformed our online strategy. Their innovative ideas and proactive approach have consistently driven engagement across our platforms, and we’ve seen incredible growth in our brand visibility. The team is knowledgeable, friendly, and invested in our success. Highly recommended!"',
	},
	{
		key: 3,
		name: 'David Liu',
		title: 'Head of Marketing at GreenWave Solutions',
		description:
			'"Positivus took our digital marketing to the next level. Their data-driven insights and creative content strategies resulted in a steady increase in customer inquiries. We appreciate their attention to detail and consistent communication throughout our campaigns."',
	},
	{
		key: 4,
		name: 'Lisa Rodriguez',
		title: 'Marketing Manager at EverBright Studios',
		description:
			'"Partnering with Positivus was the best decision we made this year. Their approach to SEO and content management improved our search rankings significantly, bringing in a steady stream of new customers. Their commitment and dedication to our goals are unmatched."',
	},
	{
		key: 5,
		name: 'Mark Henderson',
		title: 'COO at UrbanNest',
		description:
			'"The Positivus team is exceptional! They completely revamped our online branding and social media presence, and the results speak for themselves. Their strategies not only attract but retain customer interest, which has had a huge impact on our business growth."',
	},
];

export default function TestimonialsSection() {
	const [itemIndex, setItemIndex] = useState(0);
	const [carouselWidth, setCarouselWidth] = useState(0);
	const [carouselItemWidth, setCarouselItemWidth] = useState(0);
	const carouselRef = useRef(null);
	const carouselItemRef = useRef(null);
	const viewportWidth = useWindowWidth();

	function next() {
		if (itemIndex === testimonials.length - 1) return;
		setItemIndex(itemIndex + 1);
	}
	function prev() {
		if (itemIndex === 0) return;
		setItemIndex(itemIndex - 1);
	}

	useEffect(() => {
		function handleResize() {
			if (carouselRef.current) {
				setCarouselWidth(carouselRef.current.offsetWidth);
			}
			if (carouselItemRef.current) {
				setCarouselItemWidth(carouselItemRef.current.offsetWidth);
			}
		}

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className="my-16 md:my-32">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 my-10 md:my-20">
					<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
						Testimonials
					</h2>
					<p className="max-w-[45ch] text-center md:text-left">
						Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
						about Our Digital Marketing Services
					</p>
				</div>

				{/* carousel */}
				<div
					ref={carouselRef}
					className="bg-brand-dark-900 text-brand-gray-200 rounded-[2.5rem] py-8 overflow-hidden"
				>
					{/* track */}
					<div
						// This doesn't work in tailwind.
						style={{
							// Carousel sliding functionality
							transform:
								viewportWidth >= 1024 // tailwind lg breakpoint
									? `translateX(calc(-640px * ${itemIndex}))`
									: `translateX(calc(-${carouselWidth}px * ${itemIndex}))`,
							// Add inline margin to track to center item at large screen sizes
							marginInline:
								viewportWidth >= 1024
									? `${(carouselWidth - carouselItemWidth) / 2}px`
									: '0px',
						}}
						className="flex transition-transform duration-300 w-max"
					>
						{testimonials.map((testimonial, index) => (
							// item
							<div
								key={testimonial.key}
								ref={index === 0 ? carouselItemRef : null} // only add to first item
								style={{ width: `${carouselWidth}px` }}
								className="flex-shrink-0 lg:max-w-[640px] px-8 md:px-32 lg:px-12"
							>
								<div className="border-[1px] border-brand-green-300 p-8 md:px-14 md:py-12 rounded-[2.5rem] min-h-72">
									<p className="z-10">{testimonial.description}</p>
								</div>

								{/* height of this element must be same as width of it's child */}
								<div className="relative h-11">
									<div className="border-r-[1px] border-b-[1px] border-brand-green-300 w-11 aspect-square rotate-45 absolute translate-x-1/2 -translate-y-1/2 ml-6 md:ml-12 bg-brand-dark-900"></div>
								</div>

								<div className="pl-16 md:pl-24">
									<p className="text-lg font-medium text-brand-green-300">
										{testimonial.name}
									</p>
									<p>{testimonial.title}</p>
								</div>
							</div>
						))}
					</div>

					{/* navigation */}
					<div className="flex justify-center mt-16 md:mt-32 px-8">
						<div className="flex justify-between md:max-w-[50%] flex-grow">
							<button
								onClick={prev}
								className={clsx(itemIndex === 0 && 'opacity-30')}
							>
								<ArrowLeft />
							</button>

							<div className="flex gap-5">
								{testimonials.map((testimonial, index) => (
									<button
										key={testimonial.key}
										onClick={() => setItemIndex(index)}
									>
										<Indicator
											className={clsx(
												index === itemIndex && 'text-brand-green-300'
											)}
										/>
									</button>
								))}
							</div>

							<button
								onClick={next}
								className={clsx(
									itemIndex === testimonials.length - 1 && 'opacity-30'
								)}
							>
								<ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return width;
};
